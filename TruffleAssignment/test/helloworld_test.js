const Helloworld = artifacts.require('Helloworld')
// it will deploy the contract and run the test cases
contract("Helloworld", accounts => {
    // test cases
    it("constructor should set the message correctly", async ()=>{
        let instance = await Helloworld.deployed();
        let message = await instance.message();
        assert.equal(message, "Hello world constructor");
    })
    it("constructor should set the message correctly", async ()=>{
        let instance = await Helloworld.deployed();
        let message = await instance.message();
        assert.notEqual(message, "Hello worl constructor");
    })
    it("owner should be account[0]",async ()=>{
        let instance = await Helloworld.deployed();
        let owner = await instance.owner();
        assert.equal(owner, accounts[0]);
    })
    it("verify set message method",async ()=>{
        let instance = await Helloworld.deployed();
        // set new message
        await instance.setMessage("new message");
        let message = await instance.message();
        assert.equal(message, "new message");
    })
})