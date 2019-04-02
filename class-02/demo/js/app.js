'use strict'; // Vinicio - I want to use the new set of rules

let isCute = false;
let anotherCondition = true;

// Conditional LOGIC
if(isCute) {
  console.log("Kali is Cute");
} else if(anotherCondition) {
  console.log("Another Condition");
} else {
  console.log("ELSE");
}

var petGuess = prompt('How many pets do you think I have?');
var petGuessAsNumber = parseInt(petGuess);

if(petGuessAsNumber === 2) {// Vinicio - === avoids implicit conversions
  alert('That is CORRECT!');
} else {
  alert('That is NOT CORRECT!');
}

var startGame = confirm("Do you want to play a game?");

if(startGame) {
  alert('LET US PLAAAAY');
  //-------------------------------------------------------------------
  // FLU QUESTION
  //-------------------------------------------------------------------
  var fluAnswer = prompt('Did I get the flu this year (2019). Please answer with Y or with N');
  if(fluAnswer === 'Y') {
    alert('Correct! It was not fun');
  } else if(fluAnswer === 'N') {
    alert('Incorrect! I did get the flu');
  } else {
    alert('Please enter EITHER Y or N');
  }
  //-------------------------------------------------------------------
} else {
  alert('Ok....bye :(');
}
