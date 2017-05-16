//Create an array for every letter in the alphabet
var choices = 
["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



//Recognize user input
 document.onkeyup = function() {
//Capture user input and set to lower case
 	var userGuess = String.fromCharCode(event.keyCode).
 		toLowerCase();

 	 console.log(userGuess);	
 }


