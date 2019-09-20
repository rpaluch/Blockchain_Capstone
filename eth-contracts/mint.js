const HDWalletProvider = require("truffle-hdwallet-provider");
const web3 = require('web3');
const MNEMONIC = "detect type resist crumble copper segment agree busy often diary shadow rib";
const INFURA_KEY = "cb11f25e2a8c40818a5705a832194d05";
const NFT_CONTRACT_ADDRESS = "0x7e7496bd3d62d27f9881Dbfc91F44f0aee3A6410";
const OWNER_ADDRESS = "0xdF325908498D2eDeBB178a9beBe0DB6d65160b65";
const NETWORK = "rinkeby";
const NUM_PROPERTIES = 10;
const NFT_CONTRACT = require('./build/contracts/SolnSquareVerifier');
const NFT_ABI = NFT_CONTRACT.abi;
const PROPERTY_PROOFS = [
    require('../zokrates/code/square/proof-1'),
    require('../zokrates/code/square/proof-2'),
    require('../zokrates/code/square/proof-3'),
    require('../zokrates/code/square/proof-4'),
    require('../zokrates/code/square/proof-5'),
    require('../zokrates/code/square/proof-6'),
    require('../zokrates/code/square/proof-7'),
    require('../zokrates/code/square/proof-8'),
    require('../zokrates/code/square/proof-9'),
    require('../zokrates/code/square/proof-10'),
];

if (!MNEMONIC || !INFURA_KEY || !OWNER_ADDRESS || !NETWORK) {
    console.error("Please set a mnemonic, infura key, owner, network, and contract address.");
    return;
}

async function main() {
    const provider = new HDWalletProvider(MNEMONIC, `https://${NETWORK}.infura.io/v3/${INFURA_KEY}`);
    const web3Instance = new web3(
        provider
    );

    const nftContract = new web3Instance.eth.Contract(NFT_ABI, NFT_CONTRACT_ADDRESS, { gasLimit: "1000000" });

    // Properties issued directly to the owner.
    for (let i = 0; i < NUM_PROPERTIES; i++) {
        if (i < PROPERTY_PROOFS.length) {
            try {
                const {proof: {a, b, c}, inputs} = PROPERTY_PROOFS[i];
                const result = await nftContract.methods.mintToken(
                    i,
                    OWNER_ADDRESS,
                    i,
                    a,
                    b,
                    c,
                    inputs,
                ).send({ from: OWNER_ADDRESS, gas:3000000 });
                console.log("Minted property token. Transaction: " + result.transactionHash);
            } catch (error) {
                console.log("Cannot mint token: " + error);
            }
        } else {
            console.log("Cannot mint tokens. All proofs have been used.");
            break;
        }
    }
}

main();