// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ICO is ERC20, Ownable {
    constructor() ERC20("PrashooToken", "PRASH") {
        // _mint(msg.sender, 10**20);
        _mint(msg.sender, 1000000*(10**uint256(decimals())));
        
    }

    function mint(address account, uint256 amount)
        public
        onlyOwner
        returns (bool)
    {
        require(
            account != address(this) && amount != uint256(0),
            "ERC20: function mint invalid"
        );
        _mint(account, amount);
        return true;
    }

    function burn(address account, uint256 amount)
        public
        onlyOwner
        returns (bool)
    {
        require(
            account != address(this) && amount != uint256(0),
            "ERC20: function burn invalid input"
        );
        _burn(account, amount);
        return true;
    }

    function withdraw(uint256 amount) public onlyOwner returns (bool) {
        require(
            amount <= address(this).balance,
            "ICO: function withdraw has invalid input"
        );
        payable(_msgSender()).transfer(amount);
        return true;
    }

    function buy() public payable returns (bool) {
        require(
            msg.sender.balance >= msg.value && msg.value != 0 ether,
            "ICO: function buy failed"
        );
        uint256 amount = msg.value * 1000;
        _transfer(owner(), _msgSender(), amount);
        return true;
    }
}

// 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2
