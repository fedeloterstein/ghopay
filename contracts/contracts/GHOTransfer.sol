//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GHOTransfer is Ownable {
    address private _tokenAddress;

    constructor(address tokenAddress) {
        _tokenAddress = tokenAddress;
    }

    function sendTokens(address to, uint256 amount) external onlyOwner {
        require(
            IERC20(_tokenAddress).balanceOf(address(this)) >= amount,
            "Insufficient balance"
        );
        IERC20(_tokenAddress).transfer(to, amount);
    }

    function getContractBalance() external view returns (uint256) {
        return IERC20(_tokenAddress).balanceOf(address(this));
    }
}
