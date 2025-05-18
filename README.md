# ProxyContractImplementation

This repository implements a simplified ERC-1967 proxy standard for upgradeable smart contracts, deployed on the Sepolia Lisk testnet (chain ID: 4202). It fulfills an assignment to explore proxy patterns in Solidity, with a focus on upgradability and security.

## ERC-1967 Proxy Standard

### Overview
The ERC-1967 standard ([EIP-1967](https://eips.ethereum.org/EIPS/eip-1967)) enables upgradeable smart contracts by defining storage slots for the implementation, admin, and beacon addresses. This allows logic upgrades without changing the proxy’s address.

### Key Features
- **Storage Slots**:
  - Implementation: `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc`
  - Admin: `0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103`
  - Beacon: `0xa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50`
- **Upgradability**: Updates the implementation address via `upgradeTo`.
- **Delegatecall**: Executes logic contract code in the proxy’s context.
- **Security**: Uses OpenZeppelin’s `Ownable` for access control.

### How It Works
1. **Proxy Contract**: Stores the implementation address and delegates calls.
2. **Logic Contract**: Defines business logic, upgradable via the proxy.
3. **Upgrade**: The owner calls `upgradeTo` to update the implementation, emitting `Upgraded`.

### Benefits
- Fixes bugs or adds features without changing the proxy address.
- Cost-efficient by reusing the proxy.
- Standardized, used by OpenZeppelin and others.

### Limitations
- Storage collisions if logic contracts use ERC-1967 slots.
- Security risks from improper access control.
- Complex initialization management.

### Security Considerations
- **Access Control**: `onlyOwner` restricts upgrades to the deployer.
- **Initialization**: Logic contracts use `initialize` to prevent reinitialization.
- **Delegatecall**: Validates implementation addresses.

## Project Structure
- `contracts/`
  - `Proxy.sol`: ERC-1967 proxy with `Ownable` access control.
  - `LogicV1.sol`: Initial logic contract.
  - `LogicV2.sol`: Upgraded logic contract.
- `scripts/`
  - `deploy.js`: Deploys to Sepolia Lisk.
  - `upgrade.js`: Upgrades the proxy.
- `test/`
  - `Proxy.test.js`: Tests proxy functionality.
- `hardhat.config.js`: Configures Sepolia Lisk.
- `.env`: Stores RPC URL and private key (not committed).

## Setup and Usage
### Prerequisites
- Node.js (v16+)
- Hardhat
- Git
- Sepolia Lisk account with test ETH
- RPC provider (e.g., thirdweb: `https://4202.rpc.thirdweb.com`)

### Installation
```bash
git clone https://github.com/your-username/ProxyContractImplementation.git
cd ProxyContractImplementation
npm install