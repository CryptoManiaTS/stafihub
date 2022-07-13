package keeper

import (
	"encoding/json"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	channeltypes "github.com/cosmos/ibc-go/v3/modules/core/04-channel/types"
	"github.com/golang/protobuf/proto"
	"github.com/stafihub/stafihub/x/ledger/types"

	distributiontypes "github.com/cosmos/cosmos-sdk/x/distribution/types"
	icatypes "github.com/cosmos/ibc-go/v3/modules/apps/27-interchain-accounts/types"
	ibchost "github.com/cosmos/ibc-go/v3/modules/core/24-host"
)

// Implements core logic for OnAcknowledgementPacket
func (k Keeper) OnAcknowledgement(ctx sdk.Context, modulePacket channeltypes.Packet, acknowledgement []byte) error {
	k.Logger(ctx).Info("OnAcknowledgement start 1--------------------------")
	ack := channeltypes.Acknowledgement_Result{}

	err := json.Unmarshal(acknowledgement, &ack)
	if err != nil {
		ackErr := channeltypes.Acknowledgement_Error{}
		err := json.Unmarshal(acknowledgement, &ackErr)
		if err != nil {
			k.Logger(ctx).Error("Unable to unmarshal acknowledgement error", "error", err, "data", acknowledgement)
			return err
		}
		k.Logger(ctx).Error("Unable to unmarshal acknowledgement result", "error", err, "remote_err", ackErr, "data", acknowledgement)
		return err
	}
	k.Logger(ctx).Info("OnAcknowledgement start 2--------------------------", "ack", ack)
	txMsgData := &sdk.TxMsgData{}
	err = proto.Unmarshal(ack.Result, txMsgData)
	if err != nil {
		k.Logger(ctx).Error("Unable to unmarshal acknowledgement", "error", err, "ack", ack.Result)
		return err
	}

	k.Logger(ctx).Info("OnAcknowledgement start 3--------------------------", "txMsgData", txMsgData.String())

	var packetData icatypes.InterchainAccountPacketData
	err = icatypes.ModuleCdc.UnmarshalJSON(modulePacket.GetData(), &packetData)
	if err != nil {
		k.Logger(ctx).Error("unable to unmarshal acknowledgement packet data", "error", err, "data", packetData)
		return sdkerrors.Wrapf(sdkerrors.ErrUnknownRequest, "cannot unmarshal packet data: %s", err.Error())
	}

	if len(txMsgData.Data) == 1 && txMsgData.Data[0].MsgType == "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress" {
		msgs, err := icatypes.DeserializeCosmosTx(k.cdc, packetData.Data)
		if err != nil {
			k.Logger(ctx).Info("Error decoding messages", "err", err)
			return err
		}
		if len(msgs) == 0 {
			return fmt.Errorf("msgs of packetData is empty")
		}

		msgSetWithdrawAddr, ok := msgs[0].(*distributiontypes.MsgSetWithdrawAddress)
		if !ok {
			errStr := "unable to cast source message to MsgSetWithdrawAddress"
			k.Logger(ctx).Error(errStr)
			return fmt.Errorf(errStr)
		}

		// update ica pool status
		icaPool, found := k.GetIcaPoolByDelegationAddr(ctx, msgSetWithdrawAddr.DelegatorAddress)
		if !found {
			return types.ErrIcaPoolNotFound
		}
		icaPool.Status = types.IcaPoolStatusSetWithdraw

		k.SetIcaPoolDetail(ctx, icaPool)
	} else {
		propId, found := k.GetInterchainTxPropIdBySeq(ctx, modulePacket.SourcePort, modulePacket.SourceChannel, modulePacket.Sequence)
		if !found {
			return types.ErrInterchainTxPropIdNotFound
		}
		k.SetInterchainTxProposalStatus(ctx, propId, types.InterchainTxStatusSuccess)
	}

	k.Logger(ctx).Info("onAcknowledgement msg delegate end --------------------------")
	return nil
}

func (k Keeper) SetWithdrawAddressOnHost(ctx sdk.Context, delegationAddrOwner, ctrlConnectionId, delegationAddr, withdrawAddr string) error {
	var msgs []sdk.Msg

	k.Logger(ctx).Info(fmt.Sprintf("Setting withdrawal address on host.delegationAddrOwner: %s DelegatorAddress: %s WithdrawAddress: %s ctrlConnectionID: %s",
		delegationAddrOwner, delegationAddr, withdrawAddr, ctrlConnectionId))
	// construct the msg
	msgs = append(msgs, &distributiontypes.MsgSetWithdrawAddress{DelegatorAddress: delegationAddr, WithdrawAddress: withdrawAddr})
	// Send the transaction through SubmitTx
	_, err := k.SubmitTxs(ctx, ctrlConnectionId, delegationAddrOwner, msgs)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "Failed to SubmitTxs for %s, %s, %s", ctrlConnectionId, delegationAddrOwner, msgs)
	}
	return nil
}

// SubmitTxs submits an ICA transaction containing multiple messages
func (k Keeper) SubmitTxs(ctx sdk.Context, ctrlConnectionId, owner string, msgs []sdk.Msg) (uint64, error) {
	portID, err := icatypes.NewControllerPortID(owner)
	if err != nil {
		return 0, err
	}

	channelID, found := k.ICAControllerKeeper.GetActiveChannelID(ctx, ctrlConnectionId, portID)
	if !found {
		return 0, sdkerrors.Wrapf(icatypes.ErrActiveChannelNotFound, "failed to retrieve active channel for port %s", portID)
	}

	chanCap, found := k.scopedKeeper.GetCapability(ctx, ibchost.ChannelCapabilityPath(portID, channelID))
	if !found {
		return 0, sdkerrors.Wrap(channeltypes.ErrChannelCapabilityNotFound, "module does not own channel capability")
	}

	data, err := icatypes.SerializeCosmosTx(k.cdc, msgs)
	if err != nil {
		return 0, err
	}

	packetData := icatypes.InterchainAccountPacketData{
		Type: icatypes.EXECUTE_TX,
		Data: data,
	}

	// timeoutTimestamp set to max value with the unsigned bit shifted to sastisfy hermes timestamp conversion
	// it is the responsibility of the auth module developer to ensure an appropriate timeout timestamp
	// todo Decide on timeout logic
	timeoutTimestamp := ^uint64(0) >> 1
	sequence, err := k.ICAControllerKeeper.SendTx(ctx, chanCap, ctrlConnectionId, portID, packetData, uint64(timeoutTimestamp))
	if err != nil {
		return 0, err
	}

	return sequence, nil
}
