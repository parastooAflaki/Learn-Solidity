// deploy code will go here
const HDWalletProvider = require('@truffle/hdwallet-provider');

const Web3 = require('web3');

const {interface , bytecode} = require('./compile');

const mnemonic = 'vacant circle merit pigeon prosper surround fuel business orient member power sock';
const infuraProvider = 'https://rinkeby.infura.io/v3/0468277c49db41c1852bf2035629d984';
const provider = new HDWalletProvider('vacant circle merit pigeon prosper surround fuel business orient member power sock' , 'https://rinkeby.infura.io/v3/0468277c49db41c1852bf2035629d984');
const initial_message = 'Hi There!'
const web3 = new Web3(provider);

const deploy = async ()=>{

   const accounts = await web3.eth.getAccounts();
   console.log('Attempting to deploy from account' , accounts[0])
   const result = await new web3.eth.Contract(JSON.parse(interface))
   .deploy({data : bytecode , arguments:[initial_message]})
   .send({from : accounts[0] , gas: '1000000'});

  // console.log('Contract deployed to ',result.options.address);
};
deploy();