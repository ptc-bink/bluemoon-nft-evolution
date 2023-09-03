# Bluemoon NFT Evolution

This contract is for evolution of Bluemoon NFTs. The blank pendant is filled with user's custom NFT by updating metadata of the NFT.

Try running some of the following tasks:

To install all dependancies, run the following command
```shell
yarn install
```

To compile the contract, try this
```
yarn hardhat compile
```

For deploying the contract to Goerli testnet
```
yarn hardhat run ./scripts/deploy_bluemoon.ts --network goerli
```
or to Ethereum mainnet
```
yarn hardhat run ./scripts/deploy_bluemoon.ts --network mainnet
```

For verifying the contract
```
yarn hardhat verify <deployed contract address> Bluemoon_NFT BMT --network goerli
```

