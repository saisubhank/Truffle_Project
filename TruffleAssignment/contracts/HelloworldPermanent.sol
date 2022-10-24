// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

// create HelloworldPermanent contract
contract HelloworldPermanent {

  string public message;
  // constructor
  constructor (string memory _message){
    message = _message;
  }
}
