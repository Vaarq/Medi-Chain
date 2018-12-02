Web3 = require('web3')
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

web3.eth.accounts
fs = require('fs')
code = fs.readFileSync('test.sol').toString()
solc = require('solc')

compiledCode = solc.compile(code)

abiDefinition = JSON.parse(compiledCode.contracts[':test'].interface)
console.log(compiledCode.contracts[':test'].interface)
testContract = web3.eth.contract(abiDefinition)
byteCode = compiledCode.contracts[':test'].bytecode
deployedContract = testContract.new([],{data: byteCode, from: web3.eth.accounts[0], gas: 4700000}, function (err, deployedContract){
	if(deployedContract.address){
		console.log(deployedContract.address)
		contractInstance = testContract.at(deployedContract.address)
	}
	
})
