function showOption(option){
	switch(option){
		case 1:						
			document.getElementById("top_selling").style.display = "inline";
			document.getElementById("new_arrivals").style.display = "none";
			document.getElementById("recently_viewed").style.display = "none";	
			
			document.getElementById("top_area").style.backgroundColor="#EEEEEE";
			document.getElementById("new_area").style.backgroundColor="#EEEEEE";
			document.getElementById("recently_area").style.backgroundColor="#EEEEEE";
			
		break;
		case 2:				
			document.getElementById("top_selling").style.display = "none";
			document.getElementById("new_arrivals").style.display = "inline";
			document.getElementById("recently_viewed").style.display = "none";	
			
			document.getElementById("top_area").style.backgroundColor="#EEEEEE";
			document.getElementById("new_area").style.backgroundColor="#EEEEEE";
			document.getElementById("recently_area").style.backgroundColor="#EEEEEE";
			
		break;
		case 3:
			document.getElementById("top_selling").style.display = "none";
			document.getElementById("new_arrivals").style.display = "none";
			document.getElementById("recently_viewed").style.display = "inline";
			
			document.getElementById("top_area").style.backgroundColor="#EEEEEE";
			document.getElementById("new_area").style.backgroundColor="#EEEEEE";
			document.getElementById("recently_area").style.backgroundColor="#EEEEEE";
		break;
		default:
			document.getElementById("top_selling").style.display = "inline";
			document.getElementById("new_arrivals").style.display = "inline";
			document.getElementById("recently_viewed").style.display = "inline";
			
			
			document.getElementById("top_area").style.backgroundColor="#EEEEEE";
			document.getElementById("new_area").style.backgroundColor="#E0E0E0";
			document.getElementById("recently_area").style.backgroundColor="#EEEEEE";
		break;
	}
}

function changeBackgroudColor(option) {
	switch(option) {
		case 1:
			document.getElementById("header").style.backgroundColor="#DCEDC8";
		break;
		case 2:
			document.getElementById("header").style.backgroundColor="#8BC34A";
		break;
		case 3:
			document.getElementById("header").style.backgroundColor="#26A69A";
		break;
		default:
			document.getElementById("header").style.backgroundColor="#B2DFDB";
		break;
	 }
}

function changeFont(option) {
	switch(option) {
		case 1:
			document.getElementById("header").style.fontFamily="Arial";
		break;
		case 2:
			document.getElementById("header").style.fontFamily="Berlin Sans FB Demi";
		break;
		case 3:
			document.getElementById("header").style.fontFamily="BernhardFashion BT";
		break;
		default:
			document.getElementById("header").style.fontFamily="Bauhaus 93";
		break;
	}
}

function loginVal(loginForm)
{
	var returnValue=true;
	if(loginForm.username.value.length<5)
	{
			returnValue=false;
			alert("Username must be atleast 5 characters long");
			loginForm.username.value="";
			loginForm.username.focus();
			return returnValue;
	}
	if(loginForm.password.value.length<4)
	{
		returnValue=false;
		alert("Password must be atleast 4 characters long.");
		loginForm.password.value="";
		loginForm.password.focus();
		return returnValue;
	}
	if(returnValue!=false)
		{
			alert("Successful login");
			window.open('dashboard.html');
			return returnValue;
		}
	
}


function transVal()
{

	var trans = document.forms["transForm"]["transaction"].value;
	
	var reg1 = /^[A-Za-z0-9\,]+$/;
	
	if(reg1.test(trans) == false)
	{
		alert("Invalid Transaction date format!!!Only alphabets ,numbers ,comma and space allowed!!");
		return false;
	}
	else
	{
		alert("Successful Entry!!");
		return true;
	}
	
}


