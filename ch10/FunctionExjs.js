function isEvenCom(i){
	if (!i.isNaN){
		if(i % 2 === 0){
			return true;
		} 
		else {
			return false;
		}	
	}
	else {
		return "not a num";
	}
}

function isEven(i){
	if (!isNaN(i)){
		return i % 2 === 0;
		}
	else {
		return "not a num";
	}
	
}





function factorial(num){
	var f = 1;
	for (var i = 2; i <= num; i++) {
		f = i * f; 
	}
	return f;
}

function Dash(str){
	var newStr = str.replace(/-/g,"_");

	return newStr;
}