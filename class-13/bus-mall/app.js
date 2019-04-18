'use strict';

// Work with local storage (1)
// IF (THERE IS DATA IN LOCAL STORAGE)
//      LOAD DATA
// ELSE 
//      START WITH EMTPY DATA


// FIND A PLACE TO UPDATE LOCAL STORAGE (2)

//-----------------------------------------------------------------------------------------
//Data for slecting items from the catalog // Vinicio - not the biggest fan of this comment
var allCatalogItemsArray = [];
var previousItemArray = []; // Vinicio - I realized you don't need the -1, -2 -3
var currentItemArray = [];

//Data for table
var itemDescriptions = [];
var totalClicks = 0;
var MAX_CLICKS = 30;
//-----------------------------------------------------------------------------------------

function getRandomItem() { // Vinicio - function definition
    var randomNumber = Math.floor(Math.random() * allCatalogItemsArray.length);
    return randomNumber;
}

// Vinicio - these are parameters
function CatalogItem(picturePath, description) { // Vinicio - creating a Constructor Function
    // Vinicio - this.picturePath is called a property
    this.picturePath = picturePath;
    this.description = description;
    this.timesClicked = 0;

    // Vinicio - in this line the value of this represents the new object that's being made
    allCatalogItemsArray.push(this);
    itemDescriptions.push(description)

    // Vinicio - this.registerClick is called a member function or a method
    // Vinicio - WE are defining a new function inside our constructor
    this.registerClick = function () {
        this.timesClicked++;
    }
}

// var test = new CatalogItem('pizza', 'pizza');
// test.registerClick(); // Vinicio - we set this up in line 31


function renderCatalogChoices(event) { // Vinicio - smells, make it smaller
    // 1 - keeping track of clicks 
    //      - Clicks on specific pictures
    //      - Global clicks
    if (event) {
        for (var i = 0; i < allCatalogItemsArray.length; i++) {
            if (event.target.alt == allCatalogItemsArray[i].description) {
                allCatalogItemsArray[i].registerClick();
            }
        }
        totalClicks++;

        if (totalClicks === MAX_CLICKS) {
            renderChart();
        }
    }

    var randomItemOne = -1;
    var randomItemTwo = -1;
    var randomItemThree = -1;

    var catalogImageReference = document.getElementById('catalog-item');
    var catalogImageReferenceTwo = document.getElementById('catalog-item2');
    var catalogImageReferenceThree = document.getElementById('catalog-item3');
    
    // --------------------------------------------------------------------

    // Vinicio - smell - functions inside functions are a slippery slope - proceed with care
    // 2 - taking care of duplicate values
    function isItemDuplicate(randomNumber) { //This still doesn't work, not sure what to pass as parameter. Array doesn't work.
        return currentItemArray.includes(randomNumber) || previousItemArray.includes(randomNumber);
    }
    // ----------------------------------------------------------------------------

    // 3 - selecting pictures to render
    var randomItemArray = [randomItemOne, randomItemTwo, randomItemThree];
    var itemImage = allCatalogItemsArray[Number];// Assiging this variable to hold image values assigned from the objects array
    while (currentItemArray.length < randomItemArray.length) {
        for (var i = 0; i < randomItemArray.length; i++) {
            randomItemArray[i] = getRandomItem();

            itemImage = allCatalogItemsArray[randomItemArray[i]]; //?
            //--------------------------------------------------------------------------
            // Selecting which item to update - This could be moved to a function
            //--------------------------------------------------------------------------
            if (randomItemArray[i] === randomItemArray[0]) {
                catalogImageReference.src = itemImage.picturePath;
                catalogImageReference.alt = itemImage.description;

            } else if (randomItemArray[i] === randomItemArray[1]) {
                catalogImageReferenceTwo.src = itemImage.picturePath;
                catalogImageReferenceTwo.alt = itemImage.description;

            } else if (randomItemArray[i] === randomItemArray[2]) {
                catalogImageReferenceThree.src = itemImage.picturePath;
                catalogImageReferenceThree.alt = itemImage.description;
            }
            //--------------------------------------------------------------------------
            if (isItemDuplicate(randomItemArray[i])) {
                    console.log('Same item as before')
                    continue;
            } else {
                currentItemArray.push(randomItemArray[i]);
                previousItemArray = currentItemArray; // THis line DOES NOT create a copy
                console.log(`current item set: ${catalogImageReference.alt}, ${catalogImageReferenceTwo.alt}, ${catalogImageReferenceThree.alt}`)
            }
        }
    }
    currentItemArray.length = 0; //this changes both currentItemArray AND previousITemArray
    // currentItemArray = [];
}

function renderChart() {
    var canvasReference = document.getElementById("results-chart");
    var totalVotes = [];
    for (var i = 0; i < allCatalogItemsArray.length; i++) {
        totalVotes.push(allCatalogItemsArray[i].timesClicked);
    }
    new Chart(canvasReference, {
        type: 'bar',
        data: {
            labels: itemDescriptions,  // label for each individual bar
            datasets: [{
                label: 'Votes Per Item',
                data: totalVotes, // an array of the number of votes per item
                backgroundColor: ['red', 'blue', 'green', 'orange', 'pink', 'black', 'red', 'blue', 'green', 'orange', 'pink'],
            }],
        },
        options: {
            scales: {
                yAxes: [{
                    tick: {
                        beginAtZero: true,
                    }
                }]
            }
        }
    });
};

new CatalogItem("img/bag.jpg", 'A bag with r2d2 design');
new CatalogItem("img/banana.jpg", 'A banana');
new CatalogItem("img/bathroom.jpg", 'A bathroom');
new CatalogItem("img/boots.jpg", 'yellow boots');
new CatalogItem("img/breakfast.jpg", 'A breakfast');
new CatalogItem("img/bubblegum.jpg", 'bubblegum');
new CatalogItem("img/chair.jpg", 'A chair');
new CatalogItem("img/cthulhu.jpg", 'cthulhu');
new CatalogItem("img/dragon.jpg", 'A dragon');
new CatalogItem("img/pen.jpg", 'A pen');
new CatalogItem("img/pet-sweep.jpg", 'a pet sweep');
new CatalogItem("img/scissors.jpg", 'scissors');
new CatalogItem("img/shark.jpg", 'A shark');
new CatalogItem("img/sweep.png", 'sweep');
new CatalogItem("img/tauntaun.jpg", 'tauntaun');
new CatalogItem("img/unicorn.jpg", 'A unicorn');
new CatalogItem("img/usb.gif", 'A usb');
new CatalogItem("img/water-can.jpg", 'A water can');
new CatalogItem("img/wine-glass.jpg", 'A glass of wine');

renderCatalogChoices();
var catalogImageReference = document.getElementById('catalog-item');
catalogImageReference.addEventListener('click', renderCatalogChoices);

var catalogImageReferenceTwo = document.getElementById('catalog-item2');
catalogImageReferenceTwo.addEventListener('click', renderCatalogChoices);

var catalogImageReferenceThree = document.getElementById('catalog-item3');
catalogImageReferenceThree.addEventListener('click', renderCatalogChoices);
