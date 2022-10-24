// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

// create Helloworld contract
contract Helloworld {

  string public message;
  address public owner;
  // constructor
  constructor (string memory _message){
    message = _message;
    owner = msg.sender;
  }
  function sayHello() public pure returns (string memory) {
    return "hello world";
  }

  function setMessage(string memory _message) public {
    require(msg.sender == owner);
    message = _message;
  }

  function getMessage() public view returns (string memory){
    return message;
  }
}
