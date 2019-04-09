'use strict';
// Global variables
var allProducts = [];
var originalSet = [];
var newSet = [];
var maxClicks = 25;
Products.clicks = 0;

// constructor
function Products(name, filePath) {
  this.name = name;
  this.filePath = filePath;
  this.viewed = 0;
  allProducts.push(this);
}
// new products to add to Array
new Products('bag', 'img/assets/bag.jpg');
new Products('banana', 'img/assets/banana.jpg');
new Products('bathroom', 'img/assets/bathroom.jpg');
new Products('boots', 'img/assets/boots.jpg');
new Products('breakfast', 'img/assets/breakfast.jpg');
new Products('bubblegum', 'img/assets/bubblegum.jpg');
new Products('chair', 'img/assets/chair.jpg');
new Products('cthulhu', 'img/assets/cthulhu.jpg');
new Products('dog-duck', 'img/assets/dog-duck.jpg');
new Products('dragon', 'img/assets/dragon.jpg');
new Products('pen', 'img/assets/pen.jpg');
new Products('pet-sweep', 'img/assets/pet-sweep.jpg');
new Products('scissors', 'img/assets/scissors.jpg');
new Products('shark', 'img/assets/shark.jpg');
new Products('sweep', 'img/assets/sweep.jpg');
new Products('tauntaun', 'img/assets/tauntaun.jpg');
new Products('unicorn', 'img/assets/unicorn.jpg');
new Products('usb', 'img/assets/usb.jpg');
new Products('water-can', 'img/assets/water-can.jpg');
new Products('wine-glass', 'img/assets/wine-glass.jpg');

// random product generator
// recieved help from Chai Narukulla
function randomProducts() {
  newSet = [];
  while (newSet.length < 3) {
    var randomNumber = Math.floor(Math.random() * allProducts.length);
    console.log('random', randomNumber);

    // if to store the random selection into array and prevent duplicates.
    if ( allProducts[randomNumber] !== newSet.includes(allProducts[randomNumber]) && allProducts[randomNumber] !== originalSet.includes(allProducts[randomNumber])) {
      newSet.push(allProducts[randomNumber]);
    }

    else {
      // if a duplicate, will run the loop again
      randomProducts();
    }
  }
  // once the loop is done creating an array, it will make the new set equal to the original set so that it may prevent a duplicate when referenced with the next new set generated
  originalSet = newSet;
  console.log('original set', originalSet);
}
