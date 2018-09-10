var p1Button = document.querySelector("#p1"); // remeber to put # in front of idname 
var p2Button = document.getElementById("p2"); // two different ways to select
var resetButton = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numberInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span"); // the only span in the p
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click",function(){
	if(!gameOver){
		p1Score ++;
		if (p1Score === winningScore) {
			p1Display.classList.add("winner");  //only when someone wins, add the class 
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
	 else {

	}
});

p2Button.addEventListener("click",function(){
	if(!gameOver){
		p2Score ++;
		if (p2Score === winningScore) {
			p2Display.classList.add("winner");  //only when someone wins, add the class 
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
	 else {

	}
});

resetButton.addEventListener("click",reset);

function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	gameOver = false;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");	
}

numberInput.addEventListener("change",function(){ //change event is useful for both keyboard input and tab change
	//get the value of the string you input 
	winningScore = Number(this.value); //turn the string to number so that it wont break down in ===
	winningScoreDisplay.textContent = this.value; // use "this"
	reset();

});