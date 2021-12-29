// contract test code will go here
const assert = require('assert'); //assert that some value is equal some other value

const ganache = require('ganache-cli');

const Web3 = require('web3'); // Use ut to create instances -> constructor -> Uppercase W
const web3  = new Web3(ganache.provider()); // instance of Web3


//mocha is test running framework. used for backend, frontend and even solidity
//Below is an example class used for learning how to test with mocha

class Car{

    park(){
        return 'stopped';
    }

    drive(){
        return 'vroom';
    }
}

// The first string in describe can be anything. not essentially the name of the class. Just for the output report
// Secpnd arg is an arrow function
describe('Car' , ()=>{
    // Again first string just describes the purpose for further output.
    it('if park should return a string!' , ()=>{
      //   const car = new Car();
         assert.equal( car.park() , 'stopped' );
    });

    it('if car can drive' , ()=>{
       // const car = new Car();
        assert.equal(car.drive() , 'vroom')
    })
});


let car;
// before execute each it function, it will be runned
beforeEach(()=>{
    car = new Car();
})
//How to run mocha in this project?
//Make sure to change the 'test' in scripts in package.json to 'mocha'
// in terminal run 'npm run test'