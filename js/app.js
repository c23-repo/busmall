'use strict';
// Global variables
var allProducts = [];
var originalSet = [];
var newSet = [];
var clicksTotal = 0;
var picture = document.getElementById('productList');
var clickChart;

// constructor
function Products(name, filePath) {
  this.name = name;
  this.filePath = filePath;
  this.viewed = 0;
  this.clicks = 0;
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
new Products('sweep', 'img/assets/sweep.png');
new Products('tauntaun', 'img/assets/tauntaun.jpg');
new Products('unicorn', 'img/assets/unicorn.jpg');
new Products('usb', 'img/assets/usb.gif');
new Products('water-can', 'img/assets/water-can.jpg');
new Products('wine-glass', 'img/assets/wine-glass.jpg');

// random product generator
// recieved help from Chai Narukulla

function randomProducts() {
  // once the loop is done creating an array, it will make the new set equal to the original set so that it may prevent a duplicate when referenced with the next new set generated
  originalSet = newSet;
  newSet = [];
  while (newSet.length < 3) {
    var randomNumber = Math.floor(Math.random() * allProducts.length);
    console.log('random', randomNumber);

    // if to store the random selection into array and prevent duplicates.
    while (newSet.includes(allProducts[randomNumber]) || originalSet.includes(allProducts[randomNumber])) {
      randomNumber = Math.floor(Math.random() * allProducts.length);
    }
    newSet.push(allProducts[randomNumber]);
  }
  console.log('original set', originalSet);
}
function renderProduct() {
  // randomProducts();
  picture.textContent = '';
  for (var i = 0; i < newSet.length; i++) {
    var imgEl = document.createElement('img');
    imgEl.src = newSet[i].filePath;
    imgEl.alt = newSet[i].name;
    picture.appendChild(imgEl);
    newSet[i].viewed++;
    console.log(newSet[i].filePath);
  }

}

function clickedProduct(event) {

  for (var i = 0; i < newSet.length; i++) {
    if (event.target.alt === newSet[i].name) {
      newSet[i].clicks++; //adds click to the product
      clicksTotal++; //add to the total number of clicks
      randomProducts();
      renderProduct();
    }
    if (clicksTotal === 25) {
      picture.removeEventListener('click', clickedProduct);
    }
  }
}
randomProducts();
renderProduct();

// new variable to hold info from object for the chart.
var items = [];
var clicks = [];

// loop to populate the array
for (var i = 0; i < allProducts.length; i++) {
  items[i] = allProducts[i].name;
  clicks[i] = allProducts[i].clicks;
}
// the following is from chart.js

var ctx = document.getElementById('clickChart').getContext('2d');
clickChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: items,
    datasets: [{
      label: 'Preferred Products',
      data: clicks,
      backgroundColor: 'blue',
      borderColor: 'orange'
    }]
  },
  // options: {}
});
console.log('checking the number of clicks', clicks)


picture.addEventListener('click', clickedProduct);

document.getElementById('clickChart').addEventListener(clicksTotal, function (event) {
  if (event.target.clicksTotal === 25) {
    clickChart.update();
  }
});
console.log('this is a click end', clickChart);
