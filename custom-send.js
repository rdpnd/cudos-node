import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { assertIsBroadcastTxSuccess, SigningStargateClient, defaultGasPrice } from "@cosmjs/stargate";

defaultGasPrice.denom = 'stake'
const mnemonic = "actor pulse park shadow steel symptom shell board ring wrestle book affair gas order attack lady guitar blood grace cloud silver woman suit ready";
const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic,  { prefix: "cudos"});
const [firstAccount] = await wallet.getAccounts();

const rpcEndpoint = "http://localhost:26657";
const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, wallet);
console.log(JSON.stringify(client.fees))

const recipient = "cudos1wgz4dkkn09kyut4zak8fcppt69f8ecdw00sgjr";
const amount = {
    denom: "stake",
    amount: "123",
};
const result = await client.sendTokens(firstAccount.address, recipient, [amount], "Have fun with your star coins");
assertIsBroadcastTxSuccess(result);
