/*
--TO DO
- Add more buildings
- Save, Load mechanic
- Think of something for Paula to draw
- Make more upgrades - 2 for each item?
- Replace upgrade icons with actual buildings they upgrade (modified pics tho)
- Make small main cookie icon to place next to item price? 
- Make upgrades dissapear when player is far away from them(no item,
  earlier upgrade for this item is not yet bought)
- Add other upgrade types, all items effectivness, click effectivness
- Add statistics section
- Maybe get the rounding of numbers in order? Its all over the place as of now.
- Make buildings dissaper if player doesnt have the previous one(?) and money for it(?)
- DESIGN
*/

var pepes = 45000000;
var gpps = 0; // Global pepes per second



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

}

function mainButtonClick() {
  pepes += 1;
}

function normalizeNumbers(number) {
  number = number.replace(/\s/g, '');
  return number;
}

function convertBigNumber(number){

  switch(true){
    case (number >= 1000000000000):
      number = (number / 1000000000000).toFixed(3) + ' T';
      break;
    case (number >= 1000000000):
      number = (number / 1000000000).toFixed(3) + ' B';
      break;
    case (number >= 1000000):
      number = (number / 1000000).toFixed(3) + ' M';
      break;
    case (number >= 1000):
      number = (number / 1000).toFixed(3) + ' K';
      break;
  }
  return number;
}

function updateCookiesAndGppsUi() {
  var pepeCounter = document.getElementById('pepe-counter');
  pepeCounter.innerHTML = convertBigNumber(Math.round(pepes)) + ' Pepes';
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
  }

  for (var j = 0; j < upgradesDOM.length; j++){ // goes through every upgrade and lights it up if player has enough pepes to buy it
    var upgradePrice = upgradesDOM[j].querySelector('span.upgrade-price').innerHTML.replace(/\s/g, ''); // removes whitespace from the price
    if(pepes < upgrades[j].price){
      upgradesDOM[j].style.opacity = '0.4';
    }
    else {
      upgradesDOM[j].style.opacity = '1';
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

function roundNumberTo2(number) { // rounding number up to 2 decimal places to avoid rogue decimals
  return number = Math.round(number * 100) / 100;

}

function buyItem(item) {
  if (pepes >= item.price) {
    pepes -= item.price;
    item.amount++;
    item.pps = roundNumberTo2(item.pps);
    item.price = Math.floor(item.firstPrice * Math.pow(1.2, item.amount))
    item.totalPps = roundNumberTo2(item.amount * item.pps); // updates items total pps
    event.target.querySelector('span.shop-item-amount').innerHTML = convertBigNumber(item.amount); // updates amount on UI
    event.target.querySelector('span.shop-item-price').innerHTML = convertBigNumber(item.price); // updates price on UI
    updateGpps();
    updateItemsPps(item);
  }
}

function upgradeItem(upgradeNr) {
  var upgrade = upgrades[upgradeNr];
  console.log(upgrade);

  if (pepes >= upgrade.price) {
    pepes -= upgrade.price;
    upgrade.bought = true;
    upgrade.upgradedItem.pps += Math.round((upgrade.upgradedItem.pps * (upgrade.effectivness / 100)) * 100) / 100;
    upgrade.upgradedItem.pps = roundNumberTo2(upgrade.upgradedItem.pps);
    // ^ Adds effectivness percentages to the number and rounds it to 2 decimal places
    upgrade.upgradedItem.totalPps = roundNumberTo2(upgrade.upgradedItem.amount * upgrade.upgradedItem.pps); // updates items total pps
    updateGpps();
    event.target.parentElement.style.display = 'none';
    updateItemsPps(upgrade.upgradedItem);
  }
}

var upgradesDOM = document.getElementsByClassName('upgrade-image'); // array of every upgrade UI element


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

startOrRestartWorker();

setInterval(updateCookiesAndGppsUi, 1);
// setInterval(function () {
//   pepes += gpps / 25;
// }, 40); // it actually adds 1 second worth of pepes every second, the timings are weird to make
// the counter look cool