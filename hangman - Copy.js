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
console.log("|||   or lose. The words are five   |||");
console.log("|||   letters and you get ten       |||"); 
console.log("|||   guesses per word. Good luck!  |||");               
console.log("---------------------------------------");


//Set packages and globals
var fs = require("fs");
var request = require("request");
var prompt = require("prompt");
var date = require('date-and-time');
var now = new Date();

var wins = 0;
var losses = 0;
var lettersleft = 5;
var guessesleft = 10;


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

// Nextprompt function -- this will keep allowing the user to guess until game is over
function nextprompt() {
  console.log("You have " + lettersleft + " letters you still need to guess.")
  console.log("You have " + guessesleft + " guesses left. After that, you lose! Guess wisely.")
}

//PROMPT - Ask the user what letter they want to play to start the game. 
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
      console.log("Letter " + [i] + ": Hit!");
      lettersleft--;
      }
        else console.log("Letter " + [i] + ": Miss :(")
    }
  guessesleft--;

  console.log("You have " + lettersleft + " letters you still need to guess.")
  console.log("You have " + guessesleft + " guesses left. After that, you lose! Guess wisely.")

  nextprompt();

//Closing the prompt
 });


// Nextprompt function -- this will keep allowing the user to guess until game is over
function nextprompt() {

console.log("---------------------------------------");
console.log("NEXT ROUND: Choose a letter:");

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
      console.log("Letter " + [i] + ": Hit!");
      lettersleft--;
      }
        else console.log("Letter " + [i] + ": Miss :(")
    }
  guessesleft--;

  console.log("You have " + lettersleft + " letters you still need to guess.")
  console.log("You have " + guessesleft + " guesses left. After that, you lose! Guess wisely.")

  //See if the game is over
  if (lettersleft <= 0) {
    console.log("GAME OVER --> YOU WIN. Press Y below to restart or press anything else to end.");
      prompt.get([Restart], function (err, result) {
      // Log the results. 
      console.log(' --> You chose: ' + result.restart);
        if (result.restart === 'Y') {
          fs.open('hangman.js', 'r', function (err, fd) {
            if (err) throw err;
          });
        }
          else console.log("You have chosen not to restart.")
      });
  }

    else if (guessesleft <= 0) {
    console.log("GAME OVER --> YOU LOSE. Press Y below to restart or press anything else to end.")
      prompt.get([Restart], function (err, result) {
      // Log the results. 
      console.log(' --> You chose: ' + result.restart);
        if (result.restart === 'Y') {
          fs.open('hangman.js', 'r', function (err, fd) {
            if (err) throw err;
          });
        }
          else console.log("You have chosen not to restart.")
      });
    }

        else nextprompt();


//Closing the prompt
});
//Closing the function NextPrompt
}



