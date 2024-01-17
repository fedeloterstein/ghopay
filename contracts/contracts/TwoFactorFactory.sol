// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./TwoFactor.sol"; // Asegúrate de que la ruta sea correcta

contract TwoFactorFactory {
    address[] public deployedTwoFactors;
    mapping(address => address) public walletToTwoFactor;

      address public ghoTransferContract;

  constructor(address _ghoTransferContract)  {
        ghoTransferContract = address(_ghoTransferContract);
    }


    event NewTwoFactor(address indexed twoFactorAddress, address indexed wallet);

    function createTwoFactor(address _owner1, address _owner2) public {
        TwoFactor newTwoFactor = new TwoFactor(_owner1, _owner2, ghoTransferContract);
        deployedTwoFactors.push(address(newTwoFactor));
        walletToTwoFactor[_owner1] = address(newTwoFactor);
        walletToTwoFactor[_owner2] = address(newTwoFactor);

        emit NewTwoFactor(address(newTwoFactor), msg.sender);
    }

    function getDeployedTwoFactors() public view returns (address[] memory) {
        return deployedTwoFactors;
    }

    function getTwoFactorForWallet() public view returns (address) {
        return walletToTwoFactor[msg.sender];
    }
}
