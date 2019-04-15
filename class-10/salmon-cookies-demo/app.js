'use strict';

console.log(pizza);

// ------------------------------------------------------------------------------------------
// function function1 () {
//   var kali = 'is cute';
//   return khal;
//   var khal = 'is cute too';
//   console.log(khal);
// }

// function function1JS () {
//   var kali = undefined;
//   var khal = undefined;
//   kali = 'is cute';
//   return khal;
//   khal = 'is cute too';
//   console.log(khal);
// }
// ------------------------------------------------------------------------------------------

// function function1 () {
//   var result = add(5,6);
  
//   function add(a,b) {
//     return a + b;
//   }
//   return result;
// }

// function function1JS () {
//   // 1 - First, we hoist variables
//   var result = undefined;

//   // 2 - First, we hoist functions
//   function add(a,b) {
//     return a + b;
//   }
//   // 3 - Then, you execute code
//   result = add(5,6);
//   return result;
// }

// ------------------------------------------------------------------------------------------
// function function1 () {
//   function render() {
//     return 'rendering';
//   }
//   // LINES OF CODE
//   return render();
//   // LINES OF CODE
//   function render(){
//     return 'BUGGY BUG BUG BUG';
//   }
// }

// function function1JS () {
//   // function render() {
//   //   return 'rendering';
//   // }
//   function render(){
//     return 'BUGGY BUG BUG BUG';
//   }
//   return render();
// }
// ------------------------------------------------------------------------------------------

function function1 () { // Declaring a function
  var misteryName = function() { // Assignment
    return 'kali';
  }
  console.log(misteryName());
  var misteryName = function() {
    return 'BUGGY BUG BUG BUG';
  }
}

function function1JS () {
  // var misteryName = undefined;
  var misteryName = undefined;
  misteryName = function() {
    return 'kali';
  }
  console.log(misteryName());
  misteryName = function() {
    return 'BUGGY BUG BUG BUG';
  }
}

function1();
//console.log(function1JS());

var pizza = 'give me';