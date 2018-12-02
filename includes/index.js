 if (typeof web3 !== 'undefined') {
   web3 = new Web3(web3.currentProvider);
} else {
            // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
web3.eth.defaultAccount = web3.eth.accounts[2]
abi = JSON.parse('[{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getadd","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"docname","type":"string"},{"name":"allegeries","type":"string"},{"name":"every","type":"string"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]');
tC = web3.eth.contract(abi);
cI = tC.at('0x38964897574ab24d42dc3380b73f9242fa6c57ee');
var x;
function myfun(){
	$("#button").click(function(){
	cI.set($("#fname").val() + " " + $("#lname").val(), $("#allegeries").val()+" ", $("#reason").val());
	cI.get(function(error,result){
		if(!error){
			instructor.innerHTML = result;
			console.log(result);
		}	
	});
    });
}



