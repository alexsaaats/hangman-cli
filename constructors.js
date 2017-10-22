//Constructors File is loaded

//List of words to be played
var wordslistA = [
	{	name: 'Jumbo', letters: ['j', 'u', 'm', 'b', 'o'] },
	{	name: 'Dingo', letters: ['d', 'i', 'n', 'g', 'o'] },
	{	name: 'Dizzy', letters: ['d', 'i', 'z', 'z', 'y'] },
	{	name: 'Plate', letters: ['p', 'l', 'a', 't', 'e'] },
	{	name: 'Tizzy', letters: ['t', 'i', 'z', 'z', 'y'] },
	{   name: 'Testo', letters: ['t', 'e', 's', 't', 'o'] }
	];


//Randomly select one of the words and send the object to the hangman.js file
var randomnumber = Math.floor((Math.random() * 4) + 1);
//console.log("Your random number is: " + randomnumber);

var word = wordslistA[randomnumber].name;
//console.log("Word is: " + wordo);

var letters = wordslistA[randomnumber].letters;
//console.log("Letters are: " + letters);

module.exports = { letters, word };



