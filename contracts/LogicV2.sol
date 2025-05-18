// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

/**
 * @title MyLogicV2
 * @dev Upgraded logic, now multiplies value by 2
 */
contract MyLogicV2 is Initializable {
    uint256 public value;

    function initialize() public initializer {
        value = 0;
    }

    function setValue(uint256 _val) public {
        value = _val * 2;
    }

    function getValue() public view returns (uint256) {
        return value;
    }
}
