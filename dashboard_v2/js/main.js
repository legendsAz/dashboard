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


function Validate()
{
    var usernamer = document.forms["vregistration"]["username"].value;
	var fnamer = document.forms["vregistration"]["fname"].value;
	var lnamer = document.forms["vregistration"]["lname"].value;
	var emailr = document.forms["vregistration"]["email"].value;
	var passwordr = document.forms["vregistration"]["password"].value;
	
	var reg1 = /^[A-Za-z0-9_\- ]{5,}$/;
	var reg2 = /^[A-Z][a-z0-9 ]{1,}$/;
	var reg3 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	var reg4 = /^.*(?=.{4,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;
	
	if(reg1.test(usernamer) == false && usernamer.length <= 5)
	{
		alert("Invalid Username. Please enter a valid one!");
		return false;
	}
	else if(reg2.test(fnamer) == false)
	{
		alert("Invalid First name. Please enter a valid one!");
		return false;
	}
	else if(reg2.test(lnamer) == false)
	{
		alert("Invalid Last name. Please enter a valid one!");
		return false;
	}
	else if(reg3.test(emailr) == false)
	{
		alert("Invalid Email. Please enter a valid one!");
		return false;
	}
	else if(reg4.test(passwordr) == false && passwordr.length <= 4) 
	{
		alert("Invalid Password. Please enter a valid one!");
		return false;
	}
	else
	{
		alert("Successfull");
		return true;
	}

}


