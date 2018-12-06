
var doc = document.getElementById("doctor"); 
var options;
dI.getdoctors( function(error, options) {
	if(!error){
		doc.innnHTML = "";
		console.log(options);
	for(var i = 0; i < 5;  i++){
		if(options[i] != ""){
			var opt = options[i];
			doc.innerHTML +=  "<option value=\"" + opt + "\">" + opt + "</option>";
		}
	}
	}
});




function myfun(e){
	e.preventDefault();
	console.log($("#doctor").val());
	pI.set(sessionStorage.getItem('store'), $("#doctor").val(), $("#reason").val());
	pI.setdate(sessionStorage.getItem('store'), "Decemeber", "21");
	pI.settime(sessionStorage.getItem('store'), $("#timestamp").val(), "30");
	dI.setpat($("#doctor").val(),sessionStorage.getItem('store'));
	pI.get(sessionStorage.getItem('store'),function(error,result){
		if(!error){
			$("#fname").val("");
			$("#lname").val("");
			$("#reason").val("");
			console.log(result);
		}	
	});

}



