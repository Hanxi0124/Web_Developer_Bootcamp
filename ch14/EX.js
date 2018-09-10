// alert("good"); to check js connected

var button = document.querySelector("button");
// var isPink = false;

// button.addEventListener("click" , changeBackgroundColor);

// function changeBackgroundColor(){
// 	// alert("click"); to check the function work
// 	if (isPink){
		
// 		document.body.style.background = "white";
// 	}
// 	else
// 	{
// 		document.body.style.background = "Pink";
// 	}
// 	isPink = !isPink;
// };


// for css use toggle
button.addEventListener("click" , function(){
	document.body.classList.toggle("purple");
});