function simpleFunction(number1, number2) {
  var result = number1 + number2 - 1;

  return result;
  // Vinicio - return does two things
  //         1 - Stop the function
  //         2 - Return a value to whoever calls the function
}

var value = simpleFunction(10, 15);
console.log(value);