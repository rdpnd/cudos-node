# POC 3 - Add support for Staking, Slashing and Delegation
This project uses the default blog project from starport. It's purpose is to prove POC 3 requirements, such as:
 - Add support for staking, delegation and slashing in the network. 
 - Verify how vesting scheme can be applied. 
 - Prove if vested stake can be staked by a validator and/or can be delegated to another validator.
 - Add support for Validators Queue.

## Links:
 - hhttps://docs.cosmos.network/master/modules/staking/
 - https://docs.cosmos.network/master/modules/slashing/
 - https://docs.cosmos.network/master/modules/auth/05_vesting.html


## Add support for staking, delegation and slashing in the network
Staking, delegation and slashing come with the default staking and slashing modules of the Cosmos SDK. There are some parameters that can be tweaked in the config.yml or in the genesis.json directly. These are for the staking module: UnbondingTime	string (time ns), MaxValidators	uint16, KeyMaxEntries	uint16, HistoricalEntries	uint16, BondDenom	string. For the slashing module the parameters that are configurable are: SignedBlocksWindow	string (int64), MinSignedPerWindow	string (dec), DowntimeJailDuration	string (ns), SlashFractionDoubleSign	string (dec), SlashFractionDowntime	string (dec)

## Verify how vesting scheme can be applied
Cosmos SDKs' Auth module has a default vesting account implementation. The requirements for this vesting account is that it should be initialized during genesis with a starting balance X and a vesting end time ET. A vesting account may be initialized with a vesting start time ST and a number of vesting periods P. If a vesting start time is included, the vesting period will not begin until start time is reached. If vesting periods are included, the vesting will occur over the specified number of periods.</br>
For all vesting accounts, the owner of the vesting account is able to delegate and undelegate from validators, however they cannot transfer coins to another account until those coins are vested. This specification allows for three different kinds of vesting:</br>

- Delayed vesting, where all coins are vested once ET is reached.
- Continous vesting, where coins begin to vest at ST and vest linearly with respect to time until ET is reached
- Periodic vesting, where coins begin to vest at ST and vest periodically according to number of periods and the vesting amount per period. The number of periods, length per period, and amount per period are configurable. A periodic vesting account is distinguished from a continuous vesting account in that coins can be released in staggered tranches. For example, a periodic vesting account could be used for vesting arrangements where coins are relased quarterly, yearly, or over any other function of tokens over time.

## Prove if vested stake can be staked by a validator and/or can be delegated to another validator
As per the default implementation of the staking module and the vesting account implementation in the auth module, the vested coins can be delegated to a validator.

## Add support for Validators Queue
A validator queue is added by default in the staking module.

# Local build of this project

--home param on each commad indicates the blockchain storage directory.

## make
make

## init
cudos-poc-02d init cudos-poc-02-network --chain-id=cudos-poc-02-network --home=./data/init-01

## create staking account
cudos-poc-02d keys add validator01 --keyring-backend test --home=./data/init-01

## get validator's address
cudos-poc-02d keys show validator01 -a --keyring-backend test --home=./data/init-01

## add stacking account
cudos-poc-02d add-genesis-account $MY_VALIDATOR_ADDRESS 100000000000stake --home=./data/init-01

## create gen tx
cudos-poc-02d gentx validator01 100000000stake --chain-id cudos-poc-02-network --keyring-backend test --home=./data/init-01

## add tx to genesis
cudos-poc-02d collect-gentxs --home=./data/init-01

## start
cudos-poc-02d start --home=./data/init-01

# docker

1. Build persistent-node
cd ./docker
docker-compose -f .\persistent-node.yml -p cudos-network-persistent-node up --build

2. After node starts copy its it and paste it into full-node.yml
Peer node looks like:
P2P Node ID ID=de14a2005d220171c7133efb31b3f3e1d7ba776a file=/root/.blog/config/node_key.json module=p2p

3. Run full-node
cd ./docker
docker-compose -f .\full-node.yml -p cudos-network-full-node up --build

