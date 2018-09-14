var numbOfSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square"); //since container is also a div
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var modeBtn = document.querySelectorAll(".mode");

init();

function init(){
	setupModeBtn();
	setupSquares();
	reset();
}

function setupModeBtn() {
	for (var i = 0; i < modeBtn.length; i++) {
	modeBtn[i].addEventListener("click",function(){
		modeBtn[0].classList.remove("selected");
		modeBtn[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numbOfSquares = 3 : numbOfSquares = 6;
		reset();
	});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){	
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
}

function reset(){
	colors = generateRandomColor(numbOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length ; i++) {
	//add initial color to square
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";}
		};
	this.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click",function(){
	reset();
}
);

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
