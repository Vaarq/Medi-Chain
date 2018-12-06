Web3 = require('web3')
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

web3.eth.accounts
fs = require('fs')
code = fs.readFileSync('test.sol').toString()
solc = require('solc')
compiledCode = solc.compile(code)
abiPatient = JSON.parse(compiledCode.contracts[':patient'].interface)
abiDoctor = JSON.parse(compiledCode.contracts[':doctor'].interface)
console.log("abiPat  = JSON.parse('"+compiledCode.contracts[':patient'].interface+"');")
console.log("abiDoc  = JSON.parse('"+compiledCode.contracts[':doctor'].interface+"');")
patientC = web3.eth.contract(abiPatient)
doctorC = web3.eth.contract(abiDoctor)
bytepat= compiledCode.contracts[':patient'].bytecode
bytedoc= compiledCode.contracts[':doctor'].bytecode
deployedpat = patientC.new([],{data: bytepat, from: web3.eth.accounts[0], gas: 4700000}, function (err, deployedpat){
	if(deployedpat.address){
		console.log("pI = PatC.at('"+deployedpat.address + "');")
		patInstance = patientC.at(deployedpat.address)
		fs.writeFile("addresspat.txt", deployedpat.address, err => {
		if(err) throw err;
				console.log('Address file successfully created');
		});
	}
	
})
deployeddoc = doctorC.new([],{data: bytedoc, from: web3.eth.accounts[5], gas: 4700000}, function (err, deployedpat){
	if(deployeddoc.address){
		console.log("doctor:")
		console.log("dI = DocC.at('"+deployeddoc.address+ "');")
		docInstance = doctorC.at(deployeddoc.address)
		fs.writeFile("addressdoc.txt", deployeddoc.address, err => {
		if(err) throw err;
				console.log('Address file successfully created');
		});
	}
	
})
fs.writeFile("patientC.json", compiledCode.contracts[':patient'].interface, err => {
		if(err) throw err;
		console.log('File successfully created');
	});
	
fs.writeFile("doctor.json", compiledCode.contracts[':doctor'].interface, err => {
		if(err) throw err;
		console.log('File successfully created');
	});
	



