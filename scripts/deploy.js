const { ethers, upgrades } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying LogicV1 with a proxy...");
  console.log("Deploying from address:", deployer.address);

  const LogicV1 = await ethers.getContractFactory("MyLogicV1");

  // Deploy the proxy (no constructor, uses initialize instead)
  const proxy = await upgrades.deployProxy(LogicV1, [], {
    initializer: "initialize",
  });

  await proxy.waitForDeployment(); // for Hardhat v2.20+ (optional fallback: await proxy.deployed())
  const proxyAddress = await proxy.getAddress();
  console.log("Proxy deployed at:", proxyAddress);

  // Optional: get implementation address
  const implAddress = await upgrades.erc1967.getImplementationAddress(proxyAddress);
  console.log("Implementation (LogicV1) deployed at:", implAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
