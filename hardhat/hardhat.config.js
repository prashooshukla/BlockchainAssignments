require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  gasReporter: {
    enabled: true,
    currency: "INR",
    noColors: true,
    outputFile: "gasReport.txt",
    coinmarketcap: "c8d32049-a71c-4a8f-90fe-883b50f0100f",
    token: "MATIC",
  }
};
