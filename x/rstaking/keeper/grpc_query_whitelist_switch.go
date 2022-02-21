package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stafihub/stafihub/x/rstaking/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) WhitelistSwitch(goCtx context.Context, req *types.QueryWhitelistSwitchRequest) (*types.QueryWhitelistSwitchResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	isOpen := k.GetWhitelistSwitch(ctx)

	return &types.QueryWhitelistSwitchResponse{
		IsOpen: isOpen,
	}, nil
}
