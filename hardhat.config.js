require("@nomiclabs/hardhat-waffle");


task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


module.exports = {
  solidity: "0.8.4",
  networks: {
    polygon:{
      url:"https://polygon-mainnet.g.alchemy.com/v2/somerandomstring",
      accounts:["0x796F75207468696E6B207468697320697320612070726976617465206B65793F"]
    }
  }
};
