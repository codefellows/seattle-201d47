'use strict'; 

alert("Welcome to my page.");
alert("Answer a series of questions to be granted admittance. Good Luck!");

// Vinicio - Way 1
// var guessPrompt = "Let's play a guessing game; Think of a number between 1 and 20?";
// var guessNumbers = prompt(guessPrompt).toLowerCase();

// Vinicio - Way 2 - Recommended
var guessNumbers = prompt("Let's play a guessing game; Think of a number between 1 and 20?");
guessNumbers = guessNumbers.toLowerCase();

// Vinicio - your should be youre
var yourCorrect = parseInt(guessNumbers);

if(yourCorrect === 13) {
  alert('You are Correct! Great Job, Are you ready for the next question?');
} else if (yourCorrect < 13) {
  alert('That is Not Correct! Sorry you will need to try again.');
} else {
  alert('I guess it is back to the drawing board for you!');
}

// Vinicio - smells - length
var myFavoriteColor = prompt("This next question is a little tricky, what is my favorite color?").toLowerCase();
var gotItRight = parseInt(myFavoriteColor);

// Vinicio - you can't as easily use < > in strings
if(myFavoriteColor === "red" || myFavoriteColor === 'blue') { 
  alert('Yay you got another one Correct! Red is my Favorite Color. How did you know?');
} else if(gotItRight !== "red") { // Vinicio - > or < comparison won't work
  alert('Sorry but your going to have to try again');
} // Vinicio - removing the extra else

// Gabriel - Question?, but this one asked how many kids (another guessing game)
var numberOfKids = prompt("This next question is a little tricky, what is my favorite color?").toLowerCase();
var reallyAgain = parseInt(numberOfKids);

if(numberOfKids === "3").toLowerCase(); {
  alert('Good guess, Are you sure your not google-ing me lol. How did you know?');
} else if(gotItRight === "3"); {
  alert('Sorry but you got it wrong this time!');
} else {
  alert("Nope, Keep trying!!!");

var oldFart = prompt("Ok, I see you. Ok! Last One! How old am I?");
var noWay = parseInt(oldFart);

  if(oldFart) = prompt("This one is tough! How old am I?").toLowerCase(); {
    alert("Dang, your pretty lucky, Wanna buy a lotto ticket for me?");
  } else if(noWay === 37); {
    alert('...You Shall NOT PASS!!! Try again!'); {
  } else {
    alert('That was your last shot too. Dang! Better luck next time!!!!');
  } 
  }