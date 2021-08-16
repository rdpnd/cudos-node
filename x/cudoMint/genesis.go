package cudoMint

import (
	"cudos.org/cudos-node/x/cudoMint/keeper"
	"cudos.org/cudos-node/x/cudoMint/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	types2 "github.com/cosmos/cosmos-sdk/x/staking/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, data types.GenesisState) {
	k.SetMinter(ctx, data.Minter)
	k.SetParams(ctx, data.Params)

	for _, delegation := range data.Delegations {
		_, err := delegate(ctx, k, delegation)
		if err != nil {
			panic(err)
		}
	}
	// this line is used by starport scaffolding # genesis/module/init

	// this line is used by starport scaffolding # ibc/genesis/init
}

func delegate(ctx sdk.Context, k keeper.Keeper, delegation types2.MsgDelegate) (bool, error) {
	valAddr, valErr := sdk.ValAddressFromBech32(delegation.ValidatorAddress)
	if valErr != nil {
		return false, valErr
	}

	validator, found := k.StakingKeeper.GetValidator(ctx, valAddr)
	if !found {
		return false, types2.ErrNoValidatorFound
	}

	delegatorAddress, err := sdk.AccAddressFromBech32(delegation.DelegatorAddress)
	if err != nil {
		return false, err
	}

	bondDenom := k.StakingKeeper.BondDenom(ctx)
	if delegation.Amount.Denom != bondDenom {
		return false, sdkerrors.Wrapf(types2.ErrBadDenom, "got %s, expected %s", delegation.Amount.Denom, bondDenom)
	}

	// NOTE: source funds are always unbonded
	_, err = k.StakingKeeper.Delegate(ctx, delegatorAddress, delegation.Amount.Amount, types2.Unbonded, validator, true)
	if err != nil {
		return false, err
	}

	return true, nil
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	minter := k.GetMinter(ctx)
	params := k.GetParams(ctx)

	// this line is used by starport scaffolding # genesis/module/export

	// this line is used by starport scaffolding # ibc/genesis/export
	return types.NewGenesisState(minter, params)
}
