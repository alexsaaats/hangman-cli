//Start HANGMAN CLI
console.log("-----------TIME TO GET HUNG!-----------");
console.log("|||   Finding a criminal to hang    |||");
console.log("|||   Scentencing him to death....  |||");
console.log("|||   See if you can save him..     |||");
console.log("---------------------------------------");
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
var date = require('date-and-time');
var now = new Date();


//Pull in constructor functions and actions
var constructors = require('./constructors.js');
console.log("The word for play has been selected.");
console.log(" ");
console.log("MAKE YOUR FIRST GUESS: __ __ __ __ __ ");


//Log the start of the game including the word chosen
fs.appendFile('log.txt', "HANGMAN has been run at: " + date.format(now, 'YYYY/MM/DD HH:mm:ss')  + " and the word selected is " + playword + ",", function(err) {
        if (err) {
        console.log(err);
        }
      });




// GAME FUNCTIONS ----------------------------------------

// Create a WORD
console.log("Word is: " + constructors.word);
var playword = constructors.word;
// Create letters array
console.log("Letters are: " + constructors.letters);
var playletters = constructors.letters;


//PROMPT - Ask the user what letter they want to play. 
console.log("---------------------------------------");
console.log("Choose a letter:");

prompt.get(['letter'], function (err, result) {
  // Log the results. 
  console.log(' --> You chose: ' + result.letter);
  //convert to lowercase
  var lowercaseinput = result.letter.toLowerCase();
  console.log(' --> In lowercase: ' + lowercaseinput);

  //Log the input
    fs.appendFile('log.txt', "The command was: " + result.letter + " logged at " + date.format(now, 'YYYY/MM/DD HH:mm:ss') + ",", function(err) {
      if (err) {
      console.log(err);
      }
    });

    for (i=0; i < 6; i++) {
      if (lowercaseinput === constructors.letters[i]) {
      console.log("Hit!");
      // Add to a counter of hits
      /////////////////////////

      }
        else console.log("Miss!")
          //Add to a counter of misses
        ////////////////////////
    }


//You won function
////////////////////////


//You lose function
//////////////////////////


//Start over function
////////////////////////////////



//Closing the prompt
 });