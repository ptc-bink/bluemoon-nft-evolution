import { ethers } from "hardhat";

async function main() {

  const collectionName = "Bluemoon_NFT";
  const collectionSymbol = "BMT";

  const BluemoonNFTEvolution = await ethers.getContractFactory("BluemoonNFTEvolution");
  const bluemoonNFTEvolution = await BluemoonNFTEvolution.deploy(collectionName, collectionSymbol);

  await bluemoonNFTEvolution.deployed();

  console.log("Contract deployed to address: ", bluemoonNFTEvolution.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
