'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pike = {
  
  minCustomer: 23,
  maxCustomer: 65,
  avgCookiePerHr: 6.3,
  id: 'locPike',
  cookiesPerHour: [],  
  customers: function(){
    for(var i = 0; i < hours.length; i++){
      pike.cookiesPerHour.push(Math.ceil(pike.getHourlyCustomer(26, 65)));
    }
  },
  getHourlyCustomer: function (min, max){
    return Math.floor(Math.random() * (max - min) + min);
  },
    
  render: function() {

    for(var i = 0; i<hours.length; i++) {
      // Josh - 1 - getting a reference to a part I want to change
      var referencelUl = document.getElementById(this.id);
  
      //Josh - 2 - Creating the new Element
      var newElement = document.createElement('li');
      newElement.textContent = `In ${hours[i]}, we sold ${pike.cookiesPerHour[i]} cookies`;
  
      //Josh - Add the element to your reference
      referencelUl.append(newElement);
    }       
  }
};

pike.getHourlyCustomer();
pike.customers();
pike.render();


var seatac = {    
  minCustomer: 23,
  maxCustomer: 65,
  avgCookiePerHr: 6.3,
  id: 'locSeatac',
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
      var referencelUl = document.getElementById(this.id);
    
      //Josh - 2 - Creating the new Element
      var newElement = document.createElement('li');
      newElement.textContent = `In ${hours[i]}, we sold ${seatac.cookiesPerHour[i]} cookies`;
    
      //Josh - Add the element to your reference
      referencelUl.append(newElement);
    }            
  }
};
  
seatac.getHourlyCustomer();
seatac.customers();
seatac.render();


var seaCenter = {      
  minCustomer: 23,
  maxCustomer: 65,
  avgCookiePerHr: 6.3,
  id: 'locSeaCenter',
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
      var referencelUl = document.getElementById(this.id);
    
      //Josh - 2 - Creating the new Element
      var newElement = document.createElement('li');
      newElement.textContent = `In ${hours[i]}, we sold ${seaCenter.cookiesPerHour[i]} cookies`;
    
      //Josh - Add the element to your reference
      referencelUl.append(newElement);
    }  
  }
};
  
seaCenter.getHourlyCustomer();
seaCenter.customers();
seaCenter.render();
  



var capHill = {      
  minCustomer: 23,
  maxCustomer: 65,
  avgCookiePerHr: 6.3,
  id: 'locCapHill',
  cookiesPerHour: [],  
  customers: function(){
    for(var i = 0; i < hours.length; i++){
      capHill.cookiesPerHour.push(Math.ceil(capHill.getHourlyCustomer(26, 65)));
    }
  },
  getHourlyCustomer: function (min, max){
    return Math.floor(Math.random() * (max - min) + min);
  },
      
  render: function() {
  
    for(var i = 0; i<hours.length; i++) {
      // Josh - 1 - getting a reference to a part I want to change
      var referencelUl = document.getElementById(this.id);
    
      //Josh - 2 - Creating the new Element
      var newElement = document.createElement('li');
      newElement.textContent = `In ${hours[i]}, we sold ${capHill.cookiesPerHour[i]} cookies`;
    
      //Josh - Add the element to your reference
      referencelUl.append(newElement);
    }
  }
};
  
capHill.getHourlyCustomer();
capHill.customers();
capHill.render();
  


var alki = {    
  minCustomer: 23,
  maxCustomer: 65,
  avgCookiePerHr: 6.3,
  id: 'locAlki',
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
      var referencelUl = document.getElementById(this.id);
    
      //Josh - 2 - Creating the new Element
      var newElement = document.createElement('li');
      newElement.textContent = `In ${hours[i]}, we sold ${alki.cookiesPerHour[i]} cookies`;
    
      //Josh - Add the element to your reference
      referencelUl.append(newElement);
    }                
  }
};
  
alki.getHourlyCustomer();
alki.customers();
alki.render();
  

