// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TwoFactor {
    address private _tokenAddress;

    address public owner1;
    address public owner2;
    uint256 public id;

    event NewInitiateTransaction(address _to, address _from, uint256 _amount);
    event NewWithdraw(address _to, uint256 _amount);
    struct Transaction {
        address payable to;
        uint256 amount;
        bool signedByOwnerOne;
        bool signedByOwnerTwo;
        bool success;
    }
    Transaction[] public transactions;

    constructor(
        address _owner1,
        address _owner2,
        address _ghoTransferContract
    ) payable {
        owner1 = address(_owner1);
        owner2 = address(_owner2);
        _tokenAddress = _ghoTransferContract;
    }

    modifier onlyOwner() {
        require(msg.sender == owner1 || msg.sender == owner2);
        _;
    }

    function initiateTransaction(
        address payable _to,
        uint256 _amount
    ) public onlyOwner returns (uint256) {
        Transaction memory transaction;
        transaction.to = _to;
        transaction.amount = _amount;
        transaction.success = false;
        if (msg.sender == owner1) {
            transaction.signedByOwnerOne = true;
        } else {
            transaction.signedByOwnerTwo = true;
        }
        transactions.push(transaction);
        emit NewInitiateTransaction(_to, msg.sender, _amount);
        return id++;
    }

    function approveTransaction(uint256 _id) public onlyOwner {
        if (msg.sender == owner1) {
            transactions[_id].signedByOwnerOne = true;
        } else {
            transactions[_id].signedByOwnerTwo = true;
        }
        withdraw(_id);
    }

    function withdraw(uint256 _id) private {
        require(
            IERC20(_tokenAddress).balanceOf(address(this)) >=
                transactions[_id].amount,
            "Insufficient balance"
        );
        IERC20(_tokenAddress).transfer(
            transactions[_id].to,
            transactions[_id].amount
        );
        emit NewWithdraw(transactions[_id].to, transactions[_id].amount);
    }

    receive() external payable {}

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function getTransactions() public view returns (Transaction[] memory) {
        return transactions;
    }

    function getContractBalanceGHO() external view returns (uint256) {
        return IERC20(_tokenAddress).balanceOf(address(this));
    }
}
