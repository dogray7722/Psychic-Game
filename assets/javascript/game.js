//Create an array for every letter in the alphabet
var choices = 
["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Create variables for wins, losses, and letters selected
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guesses =[];

//Recognize user input
 document.onkeyup = function() {

//Capture user input and set to lower case
var userGuess = String.fromCharCode(event.keyCode).
 	toLowerCase();

console.log(userGuess);	
 
//Dump all the user guesses into the array
guesses.push(userGuess);


//Create random index of computer choices:
var computerGuess = choices[Math.floor(Math.random()
	* choices.length)];

	console.log(computerGuess);


//Validate the input and increment wins and losses
	if (userGuess == computerGuess) {
		wins++;
	}  else {

	losses++;
	guessesLeft--;
	
	}

//Update the target div with real-time results
	var html = "<p>Press any alphabet key to start playing. </p>" +
	"<p>Wins: " + wins + "</p>" +
	"<p>Losses: " + losses + "</p>" +
	"<p>Guesses Left: " + guessesLeft + 
	"<p>Letters chosen: " + guesses + "</p>";

	document.querySelector('#game').innerHTML = html;

//If guesses left is 0, reset the game and display Game Over 
	var over = "<h1>GAME OVER</h1>" +
	"<p>Press any alphabet key to play again. </p>";

	if (guessesLeft < 1) {
	   wins = 0;
	   losses = 0;
	   guessesLeft = 10;
	   guesses = [];

	   document.querySelector('#game').innerHTML = over;
	}

}