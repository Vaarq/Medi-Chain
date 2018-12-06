
$(".day").unbind().click(function() {
		
	console.log($(this).text());
	
     
        // enter code here
    
	var pats = dI.getpat(sessionStorage.getItem('store'));
	var patinfo = new Array();
	console.log(patinfo.length);
	for(var i = 0; i < pats.length; i++){
		if(pats[i]!=""){
			patinfo.push(pI.getpatientrec(pats[i]));
		}
	}
	console.log(patinfo.length);
	for(var i = 0;i < patinfo.length; i++){
		console.log(patinfo[i]);
		if(patinfo[i][3] == $(this).text()){
			$('#msg').append('<h3 class = "message_item">' + " Name: "+ patinfo[i][0] + " Problem: " +  patinfo[i][1] + " at " + patinfo[i][4] +'</h3>');
		}
	}

    

});
