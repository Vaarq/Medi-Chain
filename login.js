
function myfun(e){
	e.preventDefault();
	
		if("Doctor" == $('input[name=radioName]:checked').val() && !(dI.signin($("#email").val(), $("#pass").val()))){
			dI.setinfo($("#email").val(), $("#pass").val(),$("#name").val());
			dI.setadd($("#email").val());
			dI.getdoctors(function(error,result){
				if(!error){
					console.log(result);
					$("#email").val("");
					$("#pass").val("");
					$("#repass").val("");
					$("#name").val("");
				}else{
					console.log("fkjailed get");
				}
			});
		}else if ("Patient" == $('input[name=radioName]:checked').val() && !(pI.signin($("#email").val(), $("#pass").val())) ){
			pI.signup($("#email").val(), $("#pass").val(), $("#name").val());
			pI.setadd($("#email").val());
			pI.get($("#email").val(), function(error,result){
				if(!error){
					console.log(result);
					$("#email").val("");
					$("#pass").val("");
					$("#repass").val("");
					$("#name").val("");
				}else{
					console.log("failejd get");
				}
			});
			
		}else{
			console.log("already an accounts");
		}
	
		
	
}
function login(e){
	e.preventDefault();
	
		console.log(dI.signin($("#user").val(), $("#logpass").val()));
		if(dI.signin($("#user").val(), $("#logpass").val())){
			sessionStorage.setItem("store", $("#user").val());
			window.location.href = "./calendardoc.html";
		}else if(pI.signin($("#user").val(), $("#logpass").val())){
			sessionStorage.setItem("store", $("#user").val());
			window.location.href = "./index.html";
		}
		else{
			window.location.href = "./login.html";
		}
		
	


}