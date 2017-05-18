//Create an array for every letter in the alphabet
var choices = 
["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Create variables for wins, losses, and letters selected
var wins = 0;
var losses = 0;

//Recognize user input
 document.onkeyup = function() {

//Capture user input and set to lower case
 	var userGuess = String.fromCharCode(event.keyCode).
 		toLowerCase();

 	 console.log(userGuess);	
 
//Create random index of computer choices:
var computerGuess = choices[Math.floor(Math.random()
	* choices.length)];

	console.log(computerGuess);

	if (userGuess == computerGuess) {
		wins++;
	}  else {

	losses++;
	
	}

	var html = "<p>Press any alphabet key to start playing. </p>" +
	"<p>Wins: " + wins + "</p>" +
	"<p>Losses: " + losses + "</p>" +
	"<p>Letters chosen: " + userGuess + "</p>";

	document.querySelector('#game').innerHTML = html;

}