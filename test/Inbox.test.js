// contract test code will go here
const assert = require('assert'); //assert that some value is equal some other value

const ganache = require('ganache-cli');

const Web3 = require('web3'); // Use ut to create instances -> constructor -> Uppercase W
const web3  = new Web3(ganache.provider()); // instance of Web3
//provider is responsible for communication betweeb web3 instance and the network its connected to

const {interface , bytecode} = require('../compile.js')


let accounts;
let inbox;
//Get unlocked accounts : accounts created by ganache to send/recieve ether on test network without concerning over private keys.
beforeEach( async ()=>{
    // Get a list of all acounts    
    accounts = await web3.eth.getAccounts();

    // Use one of the accounts to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data : bytecode , arguments : ['Hi There!!']})
    .send({ from: accounts[0] , gas : '1000000'})
});


describe('Inbox' , ()=>{
    it('deploys a contract' , ()=>{
        console.log(inbox);
    })
})







