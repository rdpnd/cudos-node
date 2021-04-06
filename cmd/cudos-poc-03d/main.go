package main

import (
	"os"

	"cudos.org/cudos-poc-03/app"
	"cudos.org/cudos-poc-03/cmd/cudos-poc-03d/cmd"
	svrcmd "github.com/cosmos/cosmos-sdk/server/cmd"
)

func main() {
	rootCmd, _ := cmd.NewRootCmd()
	if err := svrcmd.Execute(rootCmd, app.DefaultNodeHome); err != nil {
		os.Exit(1)
	}
}
