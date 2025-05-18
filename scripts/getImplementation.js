// scripts/getImplementation.js
const { upgrades, ethers } = require("hardhat");

async function main() {
  const proxyAddress = "0xD9596aD8a8a45cf9601b6A818bFEba331F100600"; // Your proxy address
  const implementation = await upgrades.erc1967.getImplementationAddress(proxyAddress);
  console.log("LogicV2 implementation address:", implementation);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
