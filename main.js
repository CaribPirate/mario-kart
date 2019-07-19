//mario cart powerups
'use strict';

//vars
let numBanana = 0;
let numShell = 0;
let numStar = 0;
let numMush = 0;
let numBill = 0;
let pos = document.getElementById('position').value;

let resultsEl = document.getElementById('results');

//event listeners
document.getElementById('rand-pos').addEventListener('click', randPos);
document.getElementById('plus-1').addEventListener('click', openBox);
document.getElementById('plus-10').addEventListener('click', plus10);
document.getElementById('plus-100').addEventListener('click', plus100);
document.getElementById('plus-custom').addEventListener('click', plusCustom);
document.getElementById('until-mush').addEventListener('click', untilMushroom);
document.getElementById('clear').addEventListener('click', clearItems);

//functions
function openBox() {
  //confirm position value
  pos = Number(document.getElementById('position').value);
  //simulate results
  if (pos > 6 && pos <= 12) {
    document.getElementById('error').innerHTML = null;
    //items
    let randItem = Math.random();
    if (randItem < 0.05) {
      numBanana++;
      document.getElementById('banana').innerHTML = numBanana;
      resultsEl.innerHTML += '<img src="images/banana.png">';
    } else if (randItem < 0.10) {
      numShell++;
      document.getElementById('shell').innerHTML = numShell;
      resultsEl.innerHTML += '<img src="images/shell.png">';
    } else if (randItem < 0.35) {
      numStar++;
      document.getElementById('star').innerHTML = numStar;
      resultsEl.innerHTML += '<img src="images/star.png">';
    } else if (randItem < 0.70) {
      numMush++;
      document.getElementById('mushroom').innerHTML = numMush;
      resultsEl.innerHTML += '<img src="images/mushroom.png">';
    } else {
      numBill++;
      document.getElementById('bill').innerHTML = numBill;
      resultsEl.innerHTML += '<img src="images/bill.png">';
    }
  } else if (pos <= 6 && pos >= 1) {
    document.getElementById('error').innerHTML = '';
    //items
    let randItem = Math.random();
    if (randItem < 0.45) {
      numBanana++;
      document.getElementById('banana').innerHTML = numBanana;
      resultsEl.innerHTML += '<img src="images/banana.png">';
    } else if (randItem < 0.80) {
      numShell++;
      document.getElementById('shell').innerHTML = numShell;
      resultsEl.innerHTML += '<img src="images/shell.png">';

    } else if (randItem < 0.95) {
      numStar++;
      document.getElementById('star').innerHTML = numStar;
      resultsEl.innerHTML += '<img src="images/star.png">';
    } else if (randItem < 0.99) {
      numMush++;
      document.getElementById('mushroom').innerHTML = numMush;
      resultsEl.innerHTML += '<img src="images/mushroom.png">';
    } else {
      numBill++;
      document.getElementById('bill').innerHTML = numBill;
      resultsEl.innerHTML += '<img src="images/bill.png">';
    }
  } else if (pos <= 1 || pos >= 12) {
    //error message
    document.getElementById('error').innerHTML = 'Please enter a position between 1 and 12';
  }
}

function plus10() {
  for (let n = 0; n < 10; n++) {
    openBox();
  }
}

function plus100() {
  for (let n = 0; n < 100; n++) {
    openBox();
  }
}

function plusCustom() {
  let times = Number(document.getElementById('custom-open').value);
  for (let n = 0; n < times; n++) {
    openBox();
  }
}

function untilMushroom() {
  while(true) {
    openBox();
    if(numMush == 1){
      break;
    }
  }
}

//random position
function randPos() {
  document.getElementById('position').value = Math.floor(Math.random() * 12) + 1;
}

//clear items
function clearItems() {
  resultsEl.innerHTML = null;
  numBanana = 0;
  numShell = 0;
  numStar = 0;
  numMush = 0;
  numBill = 0;
  document.getElementById('banana').innerHTML = numBanana;
  document.getElementById('shell').innerHTML = numShell;
  document.getElementById('star').innerHTML = numStar;
  document.getElementById('mushroom').innerHTML = numMush;
  document.getElementById('bill').innerHTML = numBill;
}
