//Start HANGMAN CLI
console.log("-----------TIME TO GET HUNG!-----------");
console.log("|||   Finding a criminal to hang    |||");
console.log("|||   Scentencing him to death....  |||");
console.log("|||   See if you can save him..     |||");
console.log("---------------------------------------");


//Set packages
var fs = require("fs");
var request = require("request");
var prompt = require("prompt");
var date = require('date-and-time');
var now = new Date();

//Log the start of the game
fs.appendFile('log.txt', "HANGMAN has been run at: " + date.format(now, 'YYYY/MM/DD HH:mm:ss')  + ",", function(err) {
        if (err) {
        console.log(err);
        }
      });

