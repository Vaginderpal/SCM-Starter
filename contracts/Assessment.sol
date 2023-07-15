//SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

contract Assessment {

    mapping(address => uint) private balances;

    event Deposit(address indexed owner, uint amount);
    event Withdraw(address indexed owner, uint amount);

    function deposit(address _account, uint _number) public payable {
        balances[_account] += _number;
        emit Deposit(_account, _number);
    }

    function withdraw(address _account, uint _number) public payable {
        require(balances[_account] > 0, "You're broke!");
        balances[_account] -= _number;
        emit Withdraw(_account, _number);
    }

   
    function getBalance(address _address) public view returns(uint) {
        return balances[_address];
    } 

}
