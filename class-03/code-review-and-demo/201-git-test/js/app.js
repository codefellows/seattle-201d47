'use strict'; // I want to use the new set of rules

// var isKaliTheCutest = prompt('Do you think Kali is cutest dog ever?. Please answer yes').toLowerCase();

// var pets = ['Gregor'];

// while(isKaliTheCutest !== 'yes') {
//     // Vinicio - I know that, if I'm here, the condition IS TRUE
//     isKaliTheCutest = prompt('Do you think Kali is cutest dog ever?. Please answer yes').toLowerCase();
// }

// Vinicio - This is an infinite loop
// while(pets.length > 0) {
//     pets.pop();
//     pets.push();
// }
// Vinicio - I know that if I'm here, the condition must be false

// alert('I always knew you had good taste in dogs');

//-----------------------------------------------------------------------------------
// LAB PREPARATION
//-----------------------------------------------------------------------------------
var guessesRemaining = 4;
var userGuessedCorrectly = false;

// Vinicio - please try to keep in mind that you might see !userGuessedCorrectly
while(guessesRemaining > 0 && userGuessedCorrectly === false) {
    alert('I am letting you guess something');
    // Vinicio - I'm going to take 1 from the guessesRemaining to imply that they guessed
    guessesRemaining--; // guessesRemaining = guessesRemaining - 1;
    alert('You have ' + guessesRemaining + ' attepmts');

    // Vinicio - I'm going to set userGuessedCorrectly to true if they guess the right value
    //userGuessedCorrectly = true; // becomes false in the condition
}
// Vinicio - What can we assume when we break the loop?
//           Either they ran out of chances OR they guessed correctly
if(userGuessedCorrectly) {
    alert('Congratulations');
}
else {
    alert('BOO!');
}
//-----------------------------------------------------------------------------------
//  var answers = [1,2,3,4];
//  while() { // Vinicio - this while loop whill be in charge of the attepmts
//     // Vinicio - to be able to determine if the answer is right, you need another loop
//     for(var i =0; i < answers.length; i++) { // Vinicio - this is the loop that checks if an answer is right
//         if() {

//         }
//     }
//  }
//-----------------------------------------------------------------------------------














//  function startQuiz(){
//      var kali = 'is cute';
//      console.log(kali);
//      // vinicio - removing quizrules variable
//      alert("Time to prove your Mace Windu knowledge! My coding skills are basic so answers must be spelled correctly to get credit! Good luck!")
//      var getUserName = prompt("To start, what's your name? This is the one question you can't get wrong.")
//      alert("WRONG! Just kidding, " + getUserName + " is a cool name. Let's get started")
    

//      /*EDUCATIONAL: This is a collection of Javascript prompts and alerts asking the
//      user a question. Alert response is determined by the user's input
//      Each user response is converted to lower case. The function startQuiz() 
//      begins the program and is called with id quizButton in index.html.*/
//      // prompt vs confirm?
//      // Vinicio - consider adding answer at the end
//      var lightSaberColor = prompt("What color is Mace Windu's light saber?").toLowerCase();
//      if(lightSaberColor === 'purple'){
//          alert('Well done padwan');
//      }   else{
//          alert("WRONG. Come on, this one was easy");
//      }
//      console.log(lightSaberColor);

//      var nameGiver = prompt("What famous Jedi gave Mace Windu his name?").toLowerCase();
//      if(nameGiver === 'yoda'){
//          alert("Clever, you are!")
//      }  else{
//          alert('Study more, you must');
//      }
//      console.log(nameGiver);
     
//      var winduHistory = prompt("Did Mace Windu kill Jengo Fett at the Battle of Geonosis? Answer yes or no").toLowerCase();
//         if(winduHistory === 'yes'){
//             alert('Correct! Jengo should have known better than to cross a Grand Master. Good job, ' + getUserName);
//         }
//         else if(winduHistory === 'no'){
//             alert("Incorrect. Are you even trying " + getUserName)
//         }
//         else{
//             alert("I said answer YES or NO. Follow directions next time!")
//         }
//      console.log(winduHistory);

//      var birthPlace = prompt("On what planet was Mace Windu born?").toLowerCase();
//      if(birthPlace === 'horuun kal'){
//          alert('Wow! You really know your Windu facts!');
//      }   else{
//          alert("Not even close. Don't feel bad though, " + getUserName + ". That was a tough one.");
//      }
//      console.log(birthPlace);

//      var isWinduGreat = prompt('This one is easy. Is Mace Windu the greatest Jedi of all time? Respond with a simple yes or no.').toLowerCase();
//      if(isWinduGreat === 'yes'){
//          alert('The force is strong with you. You win! This was the only question that mattered. Bye ' + getUserName);
//      }
//      else if(isWinduGreat === 'no'){
//          alert('You must be sith. Get away from my blog right now.')
//      }
//      else{
//          alert("I said answer YES or NO. Follow directions next time!")
//      }
//      console.log(isWinduGreat);
//  }
// // Vinicio - most rulesets will ask you to have one line at the end
