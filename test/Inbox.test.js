// contract test code will go here
const assert = require('assert'); //assert that some value is equal some other value

const ganache = require('ganache-cli');

const Web3 = require('web3'); // Use ut to create instances -> constructor -> Uppercase W
const web3  = new Web3(ganache.provider()); // instance of Web3
//provider is responsible for communication betweeb web3 instance and the network its connected to


//Get unlocked accounts : accounts created by ganache to send/recieve ether on test network without concerning over private keys.
beforeEach( ()=>{
    // Get a list of all acounts    
     web3.eth.getAccounts()
     .then(fetchedAccounts => {
         console.log(fetchedAccounts)
     })
     
      //web3 can be used for different types of cryptos. eth module for working with ethereum.


    // Use one of the accounts to deploy the contract
})


describe('Inbox' , ()=>{
    it('deploys a contract' , ()=>{})
})







