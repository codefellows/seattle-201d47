'use strict';

var storeHours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm',
];

function getRandomNumber(minimum, maximum) {
  // Vinicio - the use of ceil and floor may not be as neccesary for our current code
  // minimum = Math.ceil(minimum);
  // maximum = Math.floor(maximum);
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum; 
}

// Vinicio - here, I'm using camelcase
var firstAndPike = {
  minimumCustomers: 23,
  maximumCustomers: 65,
  averageCookies: 6.3,
  hourlyConsupmtionArray: [],
  getRandomCookiesPerHour: function() {
    return getRandomNumber(this.minimumCustomers, this.maximumCustomers);
  },
  getAverageConsumption: function() {
    return Math.round(this.getRandomCookiesPerHour() * this.averageCookies);
  },
  render: function() {
    // 1 - Get a Reference to the DOM
    var ulElement = document.getElementById('first-pike');

    var sum = 0;
    for(var i = 0; i < storeHours.length; i++) {
      // 2 - Create the new element
      var liElement = document.createElement('li');

      // 2.5 - Add content
      var consumption = this.getAverageConsumption();

      sum += consumption;
      this.hourlyConsupmtionArray.push(consumption);

      liElement.textContent = `${storeHours[i]} : ${consumption} Cookies`;

      // 3 - Add the element to the DOM
      ulElement.append(liElement);
    }
    
    var totalLi = document.createElement('li');
    totalLi.textContent = `Total for the day in this store is ${sum} cookies`;
    ulElement.append(totalLi);
  }
};

firstAndPike.render();