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