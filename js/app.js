'use strict';
// Global variables
var allProducts = [];
var originalSet = [];
var newSet = [];
var maxClicks = 25;
Products.clicks = 0;

// constructor
function Products(name,filePath){
  this. name = name;
  this.filePath = filePath;
  this.viewed = 0;
  allProducts.push(this);
}
// new products to add to Array
new Products('bag','img/assets/bag.jpg');
new Products('banana','img/assets/banana.jpg');
new Products('bathroom','img/assets/bathroom.jpg');
new Products('boots','img/assets/boots.jpg');
new Products('breakfast','img/assets/breakfast.jpg');
new Products('bubblegum','img/assets/bubblegum.jpg');
new Products('chair','img/assets/chair.jpg');
new Products('cthulhu','img/assets/cthulhu.jpg');
new Products('dog-duck','img/assets/dog-duck.jpg');
new Products('dragon','img/assets/dragon.jpg');
new Products('pen','img/assets/pen.jpg');
new Products('pet-sweep','img/assets/pet-sweep.jpg');
new Products('scissors','img/assets/scissors.jpg');
new Products('shark','img/assets/shark.jpg');
new Products('sweep','img/assets/sweep.jpg');
new Products('tauntaun','img/assets/tauntaun.jpg');
new Products('unicorn','img/assets/unicorn.jpg');
new Products('usb','img/assets/usb.jpg');
new Products('water-can','img/assets/water-can.jpg');
new Products('wine-glass','img/assets/wine-glass.jpg');

// random product generator

function randomProduct(){
  var randomNumber = Math.floor(Math.random() * allProducts.length);
  console.log('random', randomNumber);
}