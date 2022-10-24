## Smart Contract with Truffle

In this assignment we have learn about Truffle. 
## Installation and Contract creation

- Install truffle using command
```sh
npm install truffle -g
```
- Scaffold default project
```sh
npm init //for initialising the default environment with contracts, migrations and test cases
```
- Create Helloworld contract inside contract directory
- Compile the contracts

```sh
truffle compile
```
- For performing migrations we need to run
```sh
truffle develop // It will compile and migrate the contract and this will run the dev chain with some accounts for testing
```
- Run this command to migrate
```sh
migrate
```
- Interact with the deployed contract using console


## Migration and Deployment

- Make modification inside Helloworld contract by adding a constructor , setMessage and getMessge method.

```sh
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
```
- Update the migration file.
- Interact with the deployed contract

### Interaction between the contract
- Create a new contract ie. HelloworldPermanent
- Update the migration code to pass the data from Helloworld contract to HelloworldPermanent contract

## Testing Contract
- Create helloworld_test inside tests folder
- Add test cases and run it using
```sh
truffle test
```

## Deployment on testnet
- Install @truffle/hdwallet-provider
- Generate mnemonic
```sh
npx mnemonic
```
- Deploy on testnet network
- Interact with the deployed contracts
