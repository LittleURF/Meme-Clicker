/*
--TO DO
- Think of something for Paula to draw
- Make upgrades dissapear when player is far away from them(no item,
  earlier upgrade for this item is not yet bought)
- Add other upgrade types, all items effectivness, click effectivness
- Add ascendance section
- Make buildings dissaper if player doesnt have the previous one(?) and money for it(?)
!!!^
!!!^
- DESIGN

*/
(function(){
  if(localStorage.getItem("save") !== null){
  var items = [

    item0 = {
      id: 'item0',
      name: 'Feels Bad Man',
      firstPrice: 10, // price of the first bought item
      price: 10,
      pps: 1,
      amount: 0,
      totalPps: 0
    },
  
    item1 = {
      id: 'item1',
      name: 'MADE YOU LOOK',
      firstPrice: 250,
      price: 250,
      pps: 10,
      amount: 0,
      totalPps: 0
    },
  
    item2 = {
      id: 'item2',
      name: 'Salt',
      firstPrice: 2000,
      price: 2000,
      pps: 100,
      amount: 0,
      totalPps: 0
    },
  
    item3 = {
      id: 'item3',
      name: 'Wednesday Frog',
      firstPrice: 22500,
      price: 22500,
      pps: 1000,
      amount: 0,
      totalPps: 0
    },
  
    item4 = {
      id: 'item4',
      name: 'Kermit',
      firstPrice: 240700,
      price: 240700,
      pps: 5500,
      amount: 0,
      totalPps: 0
    },
  
    item5 = {
      id: 'item5',
      name: 'Spongebob',
      firstPrice: 2640000,
      price: 2640000,
      pps: 23000,
      amount: 0,
      totalPps: 0
    },
  
    item6 = {
      id: 'item6',
      name: 'Dat Boi',
      firstPrice: 31416000,
      price: 31416000,
      pps: 113000,
      amount: 0,
      totalPps: 0
    },
  
    item7 = {
      id: 'item7',
      name: 'Spooky Scary Skeleton',
      firstPrice: 398000000,
      price: 398000000,
      pps: 850000,
      amount: 0,
      totalPps: 0
    },
  
    item8 = {
      id: 'item8',
      name: 'Distracted Boyfriend',
      firstPrice: 5146880000,
      price: 5146880000,
      pps: 4700000,
      amount: 0,
      totalPps: 0
    },
  
    item9 = {
      id: 'item9',
      name: 'Feels Amazing Man',
      firstPrice: 70512300000,
      price: 70512300000,
      pps: 29400000,
      amount: 0,
      totalPps: 0
    },
  
    item10 = {
      id: 'item10',
      name: 'Gachi',
      firstPrice: 1057684514000,
      price: 1057684514000,
      pps: 199000000,
      amount: 0,
      totalPps: 0
    },
  
    item11 = {
      id: 'item11',
      name: 'Grey Face',
      firstPrice: 17980636738000,
      price: 17980636738000,
      pps: 981400000,
      amount: 0,
      totalPps: 0
    },
  ]
  
  var upgrades = [
  
    upgrade0 = {
      upgradedItem: items[0],
      effectivness: 50,
      price: 250,
      bought: false,
    },
    upgrade1 = {
      upgradedItem: items[0],
      effectivness: 100,
      price: 2300,
      bought: false,
    },
  
    upgrade2 = {
      upgradedItem: item1,
      effectivness: 50,
      price: 2500,
      bought: false,
    },
  
    upgrade3 = {
      upgradedItem: item1,
      effectivness: 100,
      price: 60000,
      bought: false,
    },
  
    upgrade4 = {
      upgradedItem: item2,
      effectivness: 50,
      price: 35000,
      bought: false,
    },
  
    upgrade5 = {
      upgradedItem: item2,
      effectivness: 100,
      price: 1180000,
      bought: false,
    },
  
    upgrade6 = {
      upgradedItem: item3,
      effectivness: 50,
      price: 368000,
      bought: false,
    },
  
    upgrade7 = {
      upgradedItem: item3,
      effectivness: 100,
      price: 21000000,
      bought: false,
    },
  
    upgrade8 = {
      upgradedItem: item4,
      effectivness: 50,
      price: 1740000,
      bought: false,
    },
  
    upgrade9 = {
      upgradedItem: item4,
      effectivness: 100,
      price: 199500000,
      bought: false,
    },
  
    upgrade10 = {
      upgradedItem: item5,
      effectivness: 50,
      price: 23000000,
      bought: false,
    },
  
    upgrade11 = {
      upgradedItem: item5,
      effectivness: 100,
      price: 2100000000,
      bought: false,
    },
  
    upgrade12 = {
      upgradedItem: item6,
      effectivness: 50,
      price: 240000000,
      bought: false,
    },
  
    upgrade13 = {
      upgradedItem: item6,
      effectivness: 100,
      price: 34625000000,
      bought: false,
    },
  
    upgrade14 = {
      upgradedItem: item7,
      effectivness: 50,
      price: 4200000000,
      bought: false,
    },
  
    upgrade15 = {
      upgradedItem: item7,
      effectivness: 100,
      price: 280300000000,
      bought: false,
    },
  
    upgrade16 = {
      upgradedItem: item8,
      effectivness: 50,
      price: 40000000000,
      bought: false,
    },
  
    upgrade17 = {
      upgradedItem: item8,
      effectivness: 100,
      price: 6312000000000,
      bought: false,
    },
  
    upgrade18 = {
      upgradedItem: item9,
      effectivness: 50,
      price: 720000000000,
      bought: false,
    },
  
    upgrade19 = {
      upgradedItem: item9,
      effectivness: 100,
      price: 147312000000000,
      bought: false,
    },
  
    upgrade20 = {
      upgradedItem: item10,
      effectivness: 50,
      price: 10798000000000,
      bought: false,
    },
  
    upgrade21 = {
      upgradedItem: item10,
      effectivness: 100,
      price: 1500000000000000,
      bought: false,
    },
  
    upgrade22 = {
      upgradedItem: item11,
      effectivness: 50,
      price: 199233000000000,
      bought: false,
    },
  
    upgrade23 = {
      upgradedItem: item11,
      effectivness: 100,
      price: 26100000000000000,
      bought: false,
    },
  
  
  ];
}



  
var pepes =  0;
var gpps = 0; // Global pepes per second
var testPepesWindow = document.getElementById('test-pepes');
var itemDOM = document.getElementsByClassName('shop-item'); // array of every item UI element
var upgradesDOM = document.getElementsByClassName('upgrade-image'); // array of every upgrade UI element


if(localStorage.getItem("save") !== null){ // If a previous save exists, load it.
  loadGame();
  hideTestMoneyWindow();
 }
 else {
   testPepesWindow.style.display = 'initial';
 }

function saveGame(){
  var save = {
    pepes: pepes,
    gpps: gpps,
    items: items,
    upgrades: upgrades,
  };
  localStorage.setItem("save", JSON.stringify(save));
}

function loadGame(){
  var save = JSON.parse(localStorage.getItem("save"));
  pepes = save.pepes;
  gpps = save.gpps;

  for(var i = 0; i < items.length; i ++){ // It cant be items = save.items because then it all screws up
    items[i].price = save.items[i].price;
    items[i].pps = save.items[i].pps;
    items[i].amount = save.items[i].amount;
    items[i].totalPps = save.items[i].totalPps;
  }

  for(var j = 0; j < upgrades.length; j ++){ // same here
  upgrades[j].bought = save.upgrades[j].bought;
  }
  updateUi();
}


function updateUi(){ // Updates UI with loaded(from a save) things
  for (var i = 0; i < items.length; i++) {
    document.getElementById(items[i].id).querySelector('span.shop-item-amount').innerHTML = convertBigNumber(items[i].amount);
    document.getElementById(items[i].id).querySelector('span.shop-item-pps').innerHTML = 'PPS: ' + convertBigNumber(items[i].totalPps);
    document.getElementById(items[i].id).querySelector('span.shop-item-price').innerHTML = convertBigNumber(items[i].price);

    }

  for (var j = 0; j < upgrades.length; j++) {
    if (upgrades[j].bought === true)
    document.getElementById('upgrade' + j).style.display = 'none';
  }
}

var mainPepeButton = document.getElementById('main-pepe-button');
mainPepeButton.addEventListener("click", mainButtonClick, false);


function mainButtonClick() {
  pepes += 1;
}

function convertBigNumber(number, notToRemoveZeroes){

  function removeZeroes(number){
    for(var i = 2; i >= 0; i--){
      var lastChar = number.toString().split('').pop();
      if(lastChar == 0){
        number = parseFloat(number).toFixed(i);
      }
    }
    return number;
  }

  switch(true){
    case (number >= 1000000000000000000):
    number = (number / 1000000000000000000).toFixed(3);
     if(!notToRemoveZeroes){
       number = removeZeroes(number);}
    number += ' S';
    break;
    case (number >= 1000000000000000):
      number = (number / 1000000000000000).toFixed(3);
      if(!notToRemoveZeroes){
        number = removeZeroes(number);}
      number += ' Q';
      break;
    case (number >= 1000000000000):
      number = (number / 1000000000000).toFixed(3);
      if(!notToRemoveZeroes){
        number = removeZeroes(number);}
      number += ' T';
      break;
    case (number >= 1000000000):
      number = (number / 1000000000).toFixed(3);
      if(!notToRemoveZeroes){
        number = removeZeroes(number);}
      number += ' B';
      break;
    case (number >= 1000000):
      number = (number / 1000000).toFixed(3);
      if(!notToRemoveZeroes){
        number = removeZeroes(number);}
      number += ' M';
      break;
    case (number >= 1000):
      number = (number / 1000).toFixed(3);
      if(!notToRemoveZeroes){
        number = removeZeroes(number);}
      number += ' K';
      break;
  }
  return number;
}

function updateCookiesAndGppsUi() {
  var pepeCounter = document.getElementById('pepe-counter');
  pepeCounter.innerHTML = convertBigNumber(Math.round(pepes), true) + ' Pepes';
  document.getElementById('gpps-counter').innerHTML = convertBigNumber(gpps) + ' PPS';
  // console.log(pepes);

  for (var i = 0; i < items.length; i++) { // goes through every item and lights it up if player has enough pepes to buy it
    if (pepes >= items[i].price){
      document.getElementById(items[i].id).style.opacity = '1';
      document.getElementById(items[i].id).style.filter = 'none';
    }
    else {
      document.getElementById(items[i].id).style.opacity = '0.45';
      document.getElementById(items[i].id).style.filter = 'grayscale(100%)';
    }

    if ( items[i].amount == 0) // If item is not bought, pps is greyed out
      document.getElementById(items[i].id).querySelector('span.shop-item-pps').style.opacity = '0.4';
    else
    document.getElementById(items[i].id).querySelector('span.shop-item-pps').style.opacity = '1';
  }
 


  for (var j = 0; j < upgradesDOM.length; j++){ // goes through every upgrade and lights it up if player has enough pepes to buy it
    if(pepes < upgrades[j].price){
      upgradesDOM[j].querySelector('span.upgrade-price').style.opacity ='0.4';
      upgradesDOM[j].querySelector('img').style.opacity = '0.4';
    }
    else {
      upgradesDOM[j].querySelector('span.upgrade-price').style.opacity ='1';
      upgradesDOM[j].querySelector('img').style.opacity = '1';
    }
  
  }
}


function updateGpps() {
  var toBeGpps = 0;

  for (var i = 0; i < items.length; i++) {
    toBeGpps += items[i].totalPps;
  }

  toBeGpps = Math.round(toBeGpps);
  gpps = toBeGpps;
  startOrRestartWorker();
 // updateCookiesAndGppsUi(); // It was once here but i think its useless, in case everything breaks, check if this is the reason
}



function updateItemsPps(item) {
  document.getElementById(item.id).querySelector('span.shop-item-pps').innerHTML = 'PPS: ' + convertBigNumber(item.totalPps);
}


function buyItem(item) {
  if (pepes >= item.price) {
    pepes -= item.price;
    item.amount++;
    item.price = Math.floor(item.firstPrice * Math.pow(1.2, item.amount))
    item.totalPps = item.amount * item.pps; // updates items total pps
    var itemDOM = document.getElementById(item.id)
    itemDOM.querySelector('span.shop-item-amount').innerHTML = convertBigNumber(item.amount); // updates amount on UI
    itemDOM.querySelector('span.shop-item-price').innerHTML = convertBigNumber(item.price); // updates price on UI
    updateGpps();
    updateItemsPps(item);
  }
}

for (var i = 0; i < items.length; i++){
  itemDOM[i].addEventListener("click", buyItem.bind(this, items[i]), false);
}

for (var j = 0; j < upgrades.length; j++){
  upgradesDOM[j].addEventListener("click", upgradeItem.bind(this, upgrades[j]), false);
}

function upgradeItem(upgrade) {
  if (pepes >= upgrade.price && upgrade.bought === false) {
    pepes -= upgrade.price;
    upgrade.bought = true;
    upgrade.upgradedItem.pps += Math.round((upgrade.upgradedItem.pps * (upgrade.effectivness / 100)) * 100) / 100;
    upgrade.upgradedItem.totalPps = upgrade.upgradedItem.amount * upgrade.upgradedItem.pps; // updates items total pps
    updateGpps();
    event.target.style.display = 'none'; // removes upgrade from UI
    updateItemsPps(upgrade.upgradedItem);
    updateUi();
  }
}

function giveTestMoney() {
  pepes += 900000000;
  hideTestMoneyWindow()
}

function hideTestMoneyWindow(){
  testPepesWindow.style.display = 'none';
}

function showTestMoneyWindow(){
  testPepesWindow.style.display = 'initial';
}

document.getElementById('test-pepes-accept').addEventListener('click', giveTestMoney, false);
document.getElementById('test-pepes-decline').addEventListener('click', hideTestMoneyWindow, false);
document.getElementById('test-pepes-caller').addEventListener('click', showTestMoneyWindow, false);

var pepeCounterWorker;
function startOrRestartWorker(){

  if(pepeCounterWorker != undefined){ // If the worker is already made, it terminates it to make a new one, without it there are multiple workers all adding GPPS
    pepeCounterWorker.terminate();
  }
// This worker makes GPPS work even if the tab is not active
// this long boy down here? Dont ask, it has to do with chrome not beign able to load workers though.
pepeCounterWorker = new Worker(URL.createObjectURL(new Blob(["("+worker_function.toString()+")()"], {type: 'text/javascript'}))); 
pepeCounterWorker.onmessage =  function(e) {
  pepes += e.data;
};

pepeCounterWorker.postMessage(gpps);
}
updateUi();
startOrRestartWorker();

setInterval(updateCookiesAndGppsUi, 40);
setInterval(saveGame, 3000);
})();