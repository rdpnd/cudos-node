package main

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"os"

	"cudos.org/cudos-node/app"
	"cudos.org/cudos-node/cmd/cudos-noded/cmd"
	svrcmd "github.com/cosmos/cosmos-sdk/server/cmd"
	cmdcfg "github.com/tharsis/ethermint/cmd/config"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func main() {
	sdk.DefaultPowerReduction = sdk.NewIntFromUint64(1000000000000000000)
	cmdcfg.RegisterDenoms()

	app.SetConfig()
	rootCmd, _ := cmd.NewRootCmd()
	if err := svrcmd.Execute(rootCmd, app.DefaultNodeHome); err != nil {
		os.Exit(1)
	}
}
