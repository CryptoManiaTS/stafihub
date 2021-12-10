package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
    cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateRelayer{}, "relayers/CreateRelayer", nil)
cdc.RegisterConcrete(&MsgDeleteRelayer{}, "relayers/DeleteRelayer", nil)
cdc.RegisterConcrete(&MsgUpdateThreshold{}, "relayers/UpdateThreshold", nil)
cdc.RegisterConcrete(&MsgSetProposalLife{}, "relayers/SetProposalLife", nil)
// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
	&MsgCreateRelayer{},
	&MsgDeleteRelayer{},
)
	registry.RegisterImplementations((*sdk.Msg)(nil),
	&MsgUpdateThreshold{},
)
registry.RegisterImplementations((*sdk.Msg)(nil),
	&MsgSetProposalLife{},
)
// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
