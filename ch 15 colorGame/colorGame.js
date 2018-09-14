var colors = generateRandomColor(6);

var squares = document.querySelectorAll(".square"); //since container is also a div
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numbOfSquares = 6;

easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numbOfSquares = 3;
	colors = generateRandomColor(numbOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		}else
		{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numbOfSquares = 6;
	colors = generateRandomColor(numbOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {	
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
		
	}
});


resetButton.addEventListener("click",function(){
	colors = generateRandomColor(numbOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length ; i++) {
	//add initial color to square
	squares[i].style.backgroundColor = colors[i];
	};
	this.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";
}
);
	
for(var i = 0; i < squares.length; i++){	
	squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		// console.log(clickedColor, pickedColor);
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "right";
			changeColor(clickedColor);
			h1.style.backgroundColor = pickedColor;
			resetButton.textContent = "Play Again?";
		}  
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again";
		}
	});
}

colorDisplay.textContent = pickedColor;


function changeColor(colors){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num){
	//make an array;
	var arr = [];
	//add num random colors to array
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor(){
	//pick a red from 0 -255
	var r = Math.floor(Math.random() * 256); 
	var g = Math.floor(Math.random() * 256); 
	var b = Math.floor(Math.random() * 256); 
	return "rgb(" + r + ", " + g + ", " + b + ")"; //need space because css automatically add space between
}
