const { ethers, upgrades } = require("hardhat");

async function main() {
  const proxyAddress = "0xD9596aD8a8a45cf9601b6A818bFEba331F100600"; // your proxy

  const MyLogicV2 = await ethers.getContractFactory("MyLogicV2");
  console.log("Upgrading to LogicV2...");

  await upgrades.upgradeProxy(proxyAddress, MyLogicV2);

  console.log("Proxy successfully upgraded to LogicV2!");
  console.log("Proxy address remains:", proxyAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
