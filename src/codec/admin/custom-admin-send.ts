import { DirectSecp256k1HdWallet, Registry } from "@cosmjs/proto-signing";
import {defaultGasPrice, defaultRegistryTypes, SigningStargateClient} from "@cosmjs/stargate";
import { MsgAdminSpendCommunityPool } from "./tx"; // Replace with your own Msg import

async function test() {

    const myRegistry = new Registry([
        ...defaultRegistryTypes,
        ["/rdpnd.pocbasecosmos.pocbasecosmos.MsgAdminSpendCommunityPool", MsgAdminSpendCommunityPool], // Replace with your own type URL and Msg class
    ]);
    // defaultGasPrice.denom = 'stake'
    const mnemonic = // Replace with your own mnemonic
        "chair world open hazard health edit avoid armor denial walk motion inspire ceiling hand oblige fit sort resource devote orange wisdom gown soccer badge";

// Inside an async function...
    const signer = await DirectSecp256k1HdWallet.fromMnemonic(
        mnemonic,
        { prefix: "cudos" }, // Replace with your own Bech32 address prefix
    );
    const client = await SigningStargateClient.connectWithSigner(
        "http://localhost:26657", // Replace with your own RPC endpoint
        signer,
        {
            registry: myRegistry,
        },
    );

    const myAddress = "cudos1rpj38hy6z4hwn95mqk6lqmjwtngqrhynd8lhst";
    const message = {
        typeUrl: "/rdpnd.pocbasecosmos.pocbasecosmos.MsgAdminSpendCommunityPool", // Same as above
        value: {
            initiator: "cudos1rpj38hy6z4hwn95mqk6lqmjwtngqrhynd8lhst",
            toAddress: "cudos1h3dz23ckne303rdgag99vpp70tujakhujdqp4y",
            coins: [{denom: "cudos", amount: "10"}]
        },
    };
    const fee = {
        amount: [
            {
                denom: "stake", // Use the appropriate fee denom for your chain
                amount: "10",
            },
        ],
        gas: "100000",
    };

// Inside an async function...
// This method uses the registry you provided
    const response = await client.signAndBroadcast(myAddress, [message], fee);
    return response
}

test().then((x) => console.log(JSON.stringify(x)))