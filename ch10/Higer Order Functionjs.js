function sing() {
	console.log("5");
	console.log("6");
}

var func = setInterval(sing,1000);

clearInterval(func);

// setInterval(function () {console.log("Hi");
// 	console.log("Bye");},1000);