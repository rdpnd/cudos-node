import { DirectSecp256k1HdWallet, Registry } from "@cosmjs/proto-signing";
import {defaultGasPrice, defaultRegistryTypes, SigningStargateClient} from "@cosmjs/stargate";
import { MsgAdminSpendCommunityPool } from "./src/codec/admin/tx"; // Replace with your own Msg import


const myRegistry = new Registry([
    ...defaultRegistryTypes,
    ["/rdpnd.pocbasecosmos.pocbasecosmos.MsgAdminSpendCommunityPool", MsgAdminSpendCommunityPool], // Replace with your own type URL and Msg class
]);
defaultGasPrice.denom = 'stake'
const mnemonic = // Replace with your own mnemonic
    "term hundred excess reflect brother glare cart story frog harsh movie sand clever test hello wait call party draft horn keen fashion park pottery";

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

const myAddress = "cudos1q388h4242l0a75s4d26znac54vv876kehgcynh";
const message = {
    typeUrl: "/rdpnd.pocbasecosmos.pocbasecosmos.MsgAdminSpendCommunityPool", // Same as above
    value: {
        initiator: "cudos1q388h4242l0a75s4d26znac54vv876kehgcynh",
        to_address: "cudos1q388h4242l0a75s4d26znac54vv876kehgcynh",
        coins: "10cudos"
    },
};
const fee = {
    amount: [
        {
            denom: "stake", // Use the appropriate fee denom for your chain
            amount: "0",
        },
    ],
    gas: "10000",
};

// Inside an async function...
// This method uses the registry you provided
const response = await client.signAndBroadcast(myAddress, [message], fee);