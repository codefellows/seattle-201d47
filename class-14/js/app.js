'use strict';

function Counter(){
  this.value = 0;

  this.count = function() {
    this.value++;
    alert(this.value);
  }
}

function functionA(array,bool,number,string,object,counter) {
  // function A has a real copy of bool;
  bool = false;
  string += ' banana';
  array.push('REFERENCE');
  //array.length = 0; 
  // Vinicio - = means I'm making a new value
  // array = []; // With assingment you can force JS to change the value
  console.log('I am doing things before function B finishes');
  number = 10;
  //object.test = 'REFERENCE';
  // VInicio - we are making a new object, that is correct
  // but it's independent of the one in line 27
  object = {test: 'banana'};

  counter.count();
}

function functionC(counter){
  counter.count();
}

function functionB() {
  var array = [1,2,3]; // arrays are passed by reference
  var bool = true; // Booleans are passed by value
  var number = 100; // Numbers are going to be passed by value
  var string = 'kali'; // Strings are passed by value
  var object = { // Objects are being passed by reference
    test: 'test'
  };

  var counter = new Counter();
  functionA(array,bool,number,string,object,counter);
  counter.count();
  functionC(counter);
  // console.log(array);
  // console.log(bool);
  // console.log(number);
  // console.log(string);
  // console.log(object);
  functionC(counter);
}


functionB();