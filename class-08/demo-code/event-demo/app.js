'use strict';

/**
 * What do we need to do in order to make an event?
 * 
 * create a function (that will become the event)
 * determine what will be the user input
 * give ids to elements to be able to access them
 *    Think about ids as 'windows' to the DOM
 * Create an associaton between the DOM and the event we made
 */

// Vinicio - once I have an id in the HTML, I'll get the reference from JS

var clickMeDiv = document.getElementById('clickme');
var counterDiv = document.getElementById('counter');

var counter = 0;

// Vinicio - is very common to start event names with the prefix 'on'
function onClick() {
  alert('You Clicked ME!!!!');
}

function onHover() {
  counter++;
  counterDiv.textContent = `Hello. The counter is ${counter}`;
}


// Vinicio - AFTER defining the events I'm going to add them to the DOM
clickMeDiv.addEventListener('click' ,onClick);
clickMeDiv.addEventListener('mouseover', onHover);