function printReverse(array){
	for (var i = array.length-1; i >= 0; i--) {
		console.log(array[i]);
	}
}

function isUniform(array){
	var flag = false;
	for (var i = array.length - 1; i > 0; i--) {
		if(array[i] === array[i-1] ){
			flag = true;
		} else {
			return false;
		}

		if(i === 1 && flag === true){
			return true;
		}
	}
}


function sumArray(array){
	var sum = 0 ;
	for (var i = array.length - 1; i >= 0; i--) {
		sum = sum + array[i];
	}
	return sum;
}

function max(array){
	var i = array.length - 1;
	var maximun = array[i]; 
	for (i; i > 0; i--) {
		if(array[i-1] > maximun){
			maximun = array[i-1];
		}

	}
	return maximun;
}

function myForEach(array, func){
	for (var i = 0 ; i < array.length; i++) {
		func(array[i]);
	}
}

// function func(i){
// 	alert(i);
// }