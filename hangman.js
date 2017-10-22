//Start HANGMAN CLI
console.log("-----------TIME TO GET HUNG!-----------");
console.log("|||   Finding a criminal to hang    |||");
console.log("|||   Scentencing him to death....  |||");
console.log("|||   See if you can save him..     |||");
console.log("---------------------------------------");

//DELAY
console.log("Please wait...");
/*
const delay = require('delay');
delay(5000)
  .then(() => {
          // Executed after 200 milliseconds 
          console.log("READY!");
      });
*/


//Explain the game
console.log("------------- HOW IT WORKS ------------");
console.log("|||   Pick a letter and type it.    |||");
console.log("|||   You will get a response and   |||");
console.log("|||   you will see your results.    |||");
console.log("|||   Keep going until you win      |||");
console.log("|||   or lose.                      |||");
console.log("---------------------------------------");

//Set packages
var fs = require("fs");
var request = require("request");
var prompt = require("prompt");

var constructors = require('./constructors.js');
//console.log("Constructors:" + constructors);
var wordselected = constructors.word;
console.log("The word for play has been selected.");
console.log(" ");
console.log("MAKE YOUR FIRST GUESS: __ __ __ __ __ ");


var date = require('date-and-time');
var now = new Date();

//Log the start of the game
fs.appendFile('log.txt', "HANGMAN has been run at: " + date.format(now, 'YYYY/MM/DD HH:mm:ss')  + " and the word selected is " + wordselected + ",", function(err) {
        if (err) {
        console.log(err);
        }
      });




// GAME FUNCTIONS ----------------------------------------

// Create a WORD
console.log("Word is: " + constructors.wordo);

// Create letters array
console.log("Letters are: " + constructors.letters);


//PROMPT - Ask the user what letter they want to play. 
console.log("---------------------------------------");
console.log("Choose a letter:");

prompt.get(['letter'], function (err, result) {
  // Log the results. 
  console.log(' --> You chose: ' + result.letter);
    fs.appendFile('log.txt', "The command was: " + result.letter + " logged at " + date.format(now, 'YYYY/MM/DD HH:mm:ss') + ",", function(err) {
      if (err) {
      console.log(err);
      }
    });

    //Compare the letter chosen to the WORD


//Closing the prompt
 });