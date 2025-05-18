// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";

/**
 * @title ProxyDeployer
 * @dev Deploys the proxy pointing to initial logic (MyLogicV1)
 */
contract ProxyDeployer {
    address public deployedProxy;

    /**
     * @dev Deploys a new ERC1967Proxy contract
     * @param logic Address of the implementation contract (MyLogicV1)
     * @param data Encoded call to `initialize()` for logic contract
     */
    function deploy(address logic, bytes memory data) public {
        ERC1967Proxy proxy = new ERC1967Proxy(logic, data);
        deployedProxy = address(proxy);
    }
}
