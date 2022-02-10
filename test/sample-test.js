const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ApelympicsNFT", function () {
  it("", async function () {

    [addr_1, addr_2, addr_3, addr_4] = await ethers.getSigners();

    const ApelympicsNFT = await hre.ethers.getContractFactory("ApelympicsNFT");
    const ape = await ApelympicsNFT.deploy(
      // _winners
      ["0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
       "0x70997970c51812dc3a010c7d01b50e0d17dc79c8",
       "0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc"
      ]
    )

    console.log("ApelympicsNFT deployed to:", ape.address);

    console.log("Mint 1:")
    let tx = await ape.mint()
    console.log("Mint 2: ")
    let tx2 = await ape.mint()
    //console.log(tx)

    console.log("Mint 3:")
    let tx3 = await ape.connect(addr_2).mint()
    console.log("Mint 4:")
    let tx4 = await ape.connect(addr_3).mint()
    console.log("Mint 5:")
    let tx5 = await ape.connect(addr_4).mint()




      // ["0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266", "0x70997970c51812dc3a010c7d01b50e0d17dc79c8", "0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc"]






  });
});
