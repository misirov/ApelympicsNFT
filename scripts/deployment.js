
const { ethers } = require("ethereum-waffle/node_modules/ethers");
const hre = require("hardhat");


async function main() {
  
  const ApelympicsNFT = await hre.ethers.getContractFactory("ApelympicsNFT");
  const ape = await ApelympicsNFT.deploy(
    // _winners
    ["0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
     "0x70997970c51812dc3a010c7d01b50e0d17dc79c8",
     "0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc"
    ]
  )
  console.log("ApelympicsNFT deployed to:", ape.address);
}



main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
