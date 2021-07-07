'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPike = {
  
  minimumCustomer: 23,
  maximumCustomer: 65,
  avgCookiePerHr: 6.3,
  id: 'loc-first-and-firstAndPike',
  cookiesPerHour: [],  
  customers: function(){
    for(var i = 0; i < hours.length; i++){
      firstAndPike.cookiesPerHour.push(Math.ceil(firstAndPike.getHourlyCustomer(26, 65)));
    }
  },
  getHourlyCustomer: function (min, max){
    return Math.floor(Math.random() * (max - min) + min);
  },
    
  render: function() {

    for(var i = 0; i<hours.length; i++) {
      // Josh - 1 - getting a reference to a part I want to change
      var referenceUl = document.getElementById(this.id);
  
      //Josh - 2 - Creating the new Element
      var newElement = document.createElement('li');
      newElement.textContent = `In ${hours[i]}, we sold ${firstAndPike.cookiesPerHour[i]} cookies`;
  
      //Josh - Add the element to the DOM
      referenceUl.append(newElement);
    }       
  }
};

firstAndPike.getHourlyCustomer();
firstAndPike.customers();
firstAndPike.render();


var seatac = {    
  minimumCustomer: 23,
  maximumCustomer: 65,
  avgCookiePerHr: 6.3,
  id: 'loc-seatac',
  cookiesPerHour: [],  
  customers: function(){
    for(var i = 0; i < hours.length; i++){
      seatac.cookiesPerHour.push(Math.ceil(seatac.getHourlyCustomer(26, 65)));
    }
  },
  getHourlyCustomer: function (min, max){
    return Math.floor(Math.random() * (max - min) + min);
  },
      
  render: function() {
  
    for(var i = 0; i<hours.length; i++) {
      // Josh - 1 - getting a reference to a part I want to change
      var referenceUl = document.getElementById(this.id);
    
      //Josh - 2 - Creating the new Element
      var newElement = document.createElement('li');
      newElement.textContent = `In ${hours[i]}, we sold ${seatac.cookiesPerHour[i]} cookies`;
    
      //Josh - Add the element to the DOM
      referenceUl.append(newElement);
    }            
  }
};
  
seatac.getHourlyCustomer();
seatac.customers();
seatac.render();


var seaCenter = {      
  minimumCustomer: 23,
  maximumCustomer: 65,
  avgCookiePerHr: 6.3,
  id: 'loc-seattle-center',
  cookiesPerHour: [],  
  customers: function(){
    for(var i = 0; i < hours.length; i++){
      seaCenter.cookiesPerHour.push(Math.ceil(seaCenter.getHourlyCustomer(26, 65)));
    }
  },
  getHourlyCustomer: function (min, max){
    return Math.floor(Math.random() * (max - min) + min);
  },
      
  render: function() {
  
    for(var i = 0; i<hours.length; i++) {
      // Josh - 1 - getting a reference to a part I want to change
      var referenceUl = document.getElementById(this.id);
    
      //Josh - 2 - Creating the new Element
      var newElement = document.createElement('li');
      newElement.textContent = `In ${hours[i]}, we sold ${seaCenter.cookiesPerHour[i]} cookies`;
    
      //Josh - Add the element to the DOM
      referenceUl.append(newElement);
    }  
  }
};
  
seaCenter.getHourlyCustomer();
seaCenter.customers();
seaCenter.render();
  



var capitolHill = {      
  minimumCustomer: 23,
  maximumCustomer: 65,
  avgCookiePerHr: 6.3,
  id: 'loc-capitol-hill',
  cookiesPerHour: [],  
  customers: function(){
    for(var i = 0; i < hours.length; i++){
      capitolHill.cookiesPerHour.push(Math.ceil(capitolHill.getHourlyCustomer(26, 65)));
    }
  },
  getHourlyCustomer: function (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
      
  render: function() {
  
    for(var i = 0; i<hours.length; i++) {
      // Josh - 1 - getting a reference to a part I want to change
      var referenceUl = document.getElementById(this.id);
    
      //Josh - 2 - Creating the new Element
      var newElement = document.createElement('li');
      newElement.textContent = `In ${hours[i]}, we sold ${capitolHill.cookiesPerHour[i]} cookies`;
    
      //Josh - Add the element to the DOM
      referenceUl.append(newElement);
    }
  }
};
  
capitolHill.getHourlyCustomer();
capitolHill.customers();
capitolHill.render();
  


var alki = {    
  minimumCustomer: 23,
  maximumCustomer: 65,
  avgCookiePerHr: 6.3,
  id: 'loc-alki',
  cookiesPerHour: [],  
  customers: function(){
    for(var i = 0; i < hours.length; i++){
      alki.cookiesPerHour.push(Math.ceil(alki.getHourlyCustomer(26, 65)));
    }
  },
  getHourlyCustomer: function (min, max){
    return Math.floor(Math.random() * (max - min) + min);
  },
      
  render: function() {
  
    for(var i = 0; i<hours.length; i++) {
      // Josh - 1 - getting a reference to a part I want to change
      var referenceUl = document.getElementById(this.id);
    
      //Josh - 2 - Creating the new Element
      var newElement = document.createElement('li');
      newElement.textContent = `In ${hours[i]}, we sold ${alki.cookiesPerHour[i]} cookies`;
    
      //Josh - Add the element to the DOM
      referenceUl.append(newElement);
    }                
  }
};
  
alki.getHourlyCustomer();
alki.customers();
alki.render();
  

