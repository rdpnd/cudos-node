module cudos.org/cudos-node

go 1.15

require (
	github.com/CosmWasm/wasmd v0.17.0
	github.com/cosmos/cosmos-sdk v0.43.0
	github.com/althea-net/cosmos-gravity-bridge/module v0.0.0-00010101000000-000000000000
	github.com/cosmos/ibc-go v1.0.0
	github.com/ethereum/go-ethereum v1.10.3
	github.com/gogo/protobuf v1.3.3
	github.com/golang/protobuf v1.5.2
	github.com/google/go-cmp v0.5.6 // indirect
	github.com/gorilla/mux v1.8.0
	github.com/grpc-ecosystem/grpc-gateway v1.16.0
	github.com/regen-network/cosmos-proto v0.3.1
	github.com/spf13/cast v1.4.0
	github.com/spf13/cobra v1.2.1
	github.com/spf13/pflag v1.0.5
	github.com/tendermint/tendermint v0.34.11
	github.com/tendermint/tm-db v0.6.4
	github.com/tharsis/ethermint v0.4.2-0.20210816094510-cc3b2ff8e9ac
	google.golang.org/genproto v0.0.0-20210602131652-f16073e35f0c
	google.golang.org/grpc v1.38.0

)

replace github.com/gogo/protobuf => github.com/regen-network/protobuf v1.3.2-alpha.regen.4

replace github.com/althea-net/cosmos-gravity-bridge/module => ../CudosGravityBridge/module

replace github.com/CosmWasm/wasmd => github.com/provenance-io/wasmd v0.17.1-0.20210812214331-ce3a93a9268d
