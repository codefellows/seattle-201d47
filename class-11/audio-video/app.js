'use strict';

var changeVolumeReference = document.getElementById('change-volume');


// Vinicio - in javascript, functions are values, so they can be sent as arguments
// Vinicio - in javascript, we have higher order functions
changeVolumeReference.addEventListener('click', function() {
  var musicPlayerReference = document.getElementById('music-player');
  musicPlayerReference.volume = null;
});