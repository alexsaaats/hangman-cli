//Constructors File is loaded

//List of words to be played
var wordslistA = [
	{	name: 'Jumbo', letters: [10, 21, 13, 2, 15]	},
	{	name: 'Dingo', letters: [4, 9, 14, 7, 15] },
	{	name: 'Dizzy', letters: [4, 9, 26, 26, 25] },
	{	name: 'Plate', letters: [16, 12, 1, 20, 5] },
	{	name: 'Tizzy', letters: [20, 9, 26, 26, 25] }
	];


//Randomly select one of the words and send the object to the hangman.js file
var randomnumber = Math.floor((Math.random() * 4) + 1);
//console.log("Your random number is: " + randomnumber);

var wordo = wordslistA[randomnumber].name;
//console.log("Word is: " + wordo);

var letters = wordslistA[randomnumber].letters;
//console.log("Letters are: " + letters);

module.exports = { letters, wordo };



