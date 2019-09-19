# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# Install
This repository contains Smart Contract code in Solidity (using Truffle), tests (also using Truffle) and script to mint tokens.

To install, download or clone the repo, then:

`npm install truffle compile`

# Run Tests

Tests were developed with help of Ganache UI, so the code is configured to work on `7545` localhost port.

In order to run tests:
1. run Ganache UI
2. `cd eth-contracts`
3. run tests: 

```
truffle test test/TestERC721Mintable.js

truffle test test/TestSquareVerifier.js

truffle test test/TestSolnSquareVerifier
```

# Deploying to Rinkeby

Truffle was configured for Rinkeby network and contracts were deployed to Rinkeby using following command:

`truffle migrate --network rinkeby`

# Rinkeby Deployment Details

* **Contract address**: [https://rinkeby.etherscan.io/address/0x7e7496bd3d62d27f9881dbfc91f44f0aee3a6410](https://rinkeby.etherscan.io/address/0x7e7496bd3d62d27f9881dbfc91f44f0aee3a6410)
* **Token address**: [https://rinkeby.etherscan.io/token/0x7e7496bd3d62d27f9881dbfc91f44f0aee3a6410](https://rinkeby.etherscan.io/token/0x7e7496bd3d62d27f9881dbfc91f44f0aee3a6410)
* **Minted tokens**: 
[Token 1](https://rinkeby.etherscan.io/tx/0xf1b2a6754259a3f505e26855894c6d183b13fe26f9502a971032848a6b77bbf1), 
[Token 2](https://rinkeby.etherscan.io/tx/0x9a04c3196dbe7d021375ba43462c7cdfe01843842a8099dafc750a3aa1da1b04),
[Token 3](https://rinkeby.etherscan.io/tx/0xfbde670d4f70fa2d39af353b153baedb9730a4e9e5b37e02351a475174eb6831),
[Token 4](https://rinkeby.etherscan.io/tx/0x9b8f97854fb5d566fd2ff258f00430761ebfa2bf5734152f04b2373363afd127),
[Token 5](https://rinkeby.etherscan.io/tx/0x281611afe50852ccfc2a67a0a5e18bc048bad017ad058ec8ed4f4f3c75997409),
[Token 6](https://rinkeby.etherscan.io/tx/0xf4d78a5f30beb6bd91ac69012ea65f8baf7a5c842e7f63528e337fe9ae785f96),
[Token 7](https://rinkeby.etherscan.io/tx/0x1437bf63dda1de7acb728f591a84f4b3fede02f209b723f1339d41a8416153f1),
[Token 8](https://rinkeby.etherscan.io/tx/0xb5ada02470ae447da9a505b6deeeb907bebf7a7447e66b25f8cc5b341806cbf5),
[Token 9](https://rinkeby.etherscan.io/tx/0xb1dc0ee6664fc6df61aeb9f6bae9ae88186e880623885f6a7d01e3bb60d310dc),
[Token 10](https://rinkeby.etherscan.io/tx/0xc1a55dbfd9dd20ba7b2022468c308e776d2be3aaa32f74861f60db1f6dd5fa20),
[Token 11](https://rinkeby.etherscan.io/tx/0xc7b58f98b6338aae1b1528c984640bd0dbc52d0a81df38660e92014633252d8e)

# OpenSea Marketplace
**Storefront link**: [https://rinkeby.opensea.io/assets/udacity-property-market-token-1](https://rinkeby.opensea.io/assets/udacity-property-market-token-1)

**Example sales transaction on Rinkeby**: [https://rinkeby.etherscan.io/tx/0xea01af29c02a11c720e510735f00e7ad2f1e8552770c74170b7a0d25e85be3d5](https://rinkeby.etherscan.io/tx/0xea01af29c02a11c720e510735f00e7ad2f1e8552770c74170b7a0d25e85be3d5)

# Minting Tokens

A script was used based on OpenSea's example.

```
cd eth-contracts
node mint.js
```

Script contains account information and parameters that may require changes to mint your tokens.

# Software versions

* Truffle: v5.0.24 (core: 5.0.24)
* Solidity: ^0.4.24 (solc-js)
* Node: v10.14.1
* Web3.js: v1.0.0-beta.37

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
