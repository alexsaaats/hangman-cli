//Require outside packages etc. 
var prompt = require("prompt");

//Start game
console.log("----------HANGMAN CLI----------");
console.log("|||   Getting started...    |||");
console.log("|||   Starting boosters...  |||");
console.log("|||   ***** READY *****     |||");
console.log("-------------------------------");

//Prompt for first letter
 prompt.get(['command'], function (err, result) {
    // 
    // Log the results. 
    console.log(' --> You commanded me to: ' + result.command);

    if (result.command === "Letter") {
    	console.log("Okay, you choose" + result.command)
		
	}

//Word constructor function

//Letter constructor function

//Check if letter is correct for the given WORD

//Check if user has guesses left

//Check if user wants to play again

