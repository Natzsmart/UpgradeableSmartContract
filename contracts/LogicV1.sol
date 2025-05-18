// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract MyLogicV1 is Initializable {
    uint256 public value;

    function initialize() public initializer {
        value = 0;
    }

    function setValue(uint256 _val) public {
        value = _val;
    }

    function getValue() public view returns (uint256) {
        return value;
    }
}
