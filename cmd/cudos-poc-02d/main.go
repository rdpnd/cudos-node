package main

import (
	"os"

	"cudos.org/cudos-poc-02/app"
	"cudos.org/cudos-poc-02/cmd/cudos-poc-02d/cmd"
	svrcmd "github.com/cosmos/cosmos-sdk/server/cmd"
)

func main() {
	rootCmd, _ := cmd.NewRootCmd()
	if err := svrcmd.Execute(rootCmd, app.DefaultNodeHome); err != nil {
		os.Exit(1)
	}
}
