# 🧱 Upgradeable Smart Contract on Lisk Sepolia

This project demonstrates the use of OpenZeppelin's upgradeable proxy pattern using Hardhat on the Lisk Sepolia testnet. It includes:

- `MyLogicV1`: A basic logic contract.
- `MyLogicV2`: An upgraded version that modifies behavior.
- Scripts for deployment, upgrade, and implementation lookup.
- Verification on the Lisk Sepolia BlockScout explorer.

---

## 📦 Project Structure

```
UpgradeableSmartContract/
│
├── contracts/
│   ├── LogicV1.sol
│   └── LogicV2.sol
│
├── scripts/
│   ├── deploy.js
│   ├── upgrade.js
│   └── getImplementation.js
│
├── test/
│   └── upgradeable.test.js
│
├── hardhat.config.js
└── README.md
```

---

## 🛠️ Setup

```bash
git clone <this-repo-url>
cd UpgradeableSmartContract
npm install
```

Ensure the following plugins are installed in `package.json`:

```json
"@nomicfoundation/hardhat-toolbox",
"@openzeppelin/hardhat-upgrades",
"@openzeppelin/contracts-upgradeable"
```

---

## 🔐 Deployment to Lisk Sepolia

1. **Deploy Proxy with LogicV1**

```bash
npx hardhat run scripts/deploy.js --network liskSepolia
```

📍 *Deployed proxy address:* `0xD9596aD8a8a45cf9601b6A818bFEba331F100600`  
📍 *Implementation (LogicV1) verified at:*  
https://sepolia-blockscout.lisk.com/address/0x1F1a8120C0fB12cd54c3c2C5B65c077c91A0eebB#code

---

2. **Upgrade to LogicV2**

```bash
npx hardhat run scripts/upgrade.js --network liskSepolia
```

✅ *Upgrade successful!*  
📍 *Implementation (LogicV2) verified at:*  
https://sepolia-blockscout.lisk.com/address/0x907aA123130890D3dC4534Aa1916b79E0b0556bC#code

---

3. **Check Current Implementation**

```bash
npx hardhat run scripts/getImplementation.js --network liskSepolia
```

Returns:
```
LogicV2 implementation address: 0x907aA123130890D3dC4534Aa1916b79E0b0556bC
```

---

## 🔍 Verifying Contracts

**LogicV1**

```bash
npx hardhat verify --network liskSepolia 0x1F1a8120C0fB12cd54c3c2C5B65c077c91A0eebB
```

**LogicV2**

```bash
npx hardhat verify --network liskSepolia 0x907aA123130890D3dC4534Aa1916b79E0b0556bC
```

---

## 🧩 Notes

- If using `initializer: false` in the proxy deployment, ensure your contract logic does **not** expect an initialization step. Alternatively, use `initializer: 'initialize'` if you do have an `initialize()` function.
- You may ignore the Sourcify warning, or enable it in your `hardhat.config.js`.

```js
sourcify: {
  enabled: true
}
```

---

## 🧪 Lisk Sepolia Block Explorer

- [Proxy address](https://sepolia-blockscout.lisk.com/address/0xD9596aD8a8a45cf9601b6A818bFEba331F100600)
- [LogicV1 verified](https://sepolia-blockscout.lisk.com/address/0x1F1a8120C0fB12cd54c3c2C5B65c077c91A0eebB#code)
- [LogicV2 verified](https://sepolia-blockscout.lisk.com/address/0x907aA123130890D3dC4534Aa1916b79E0b0556bC#code)

---

## 🧰 Tooling

- Hardhat
- OpenZeppelin Contracts Upgradeable
- Lisk EVM Testnet (Sepolia)
- BlockScout Explorer

---

Made with ❤️ by `smartcodez`