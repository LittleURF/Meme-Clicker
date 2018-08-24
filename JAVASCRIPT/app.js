/*
--TO DO
- Deal with large numbers, changing multiple zeroes to letter (1 000 000 - 1M)
- Make Buildings you dont have money for, stand out (low brightness fe.) - nao?
- Add more buildings
- Save, Load mechanic
- Think of something for Paula to draw
- Do more upgrades split into categories, single item effectivness,
  all items effectivness, click power?
- Replace upgrade icons with actual buildings they upgrade (modified pics tho)
- Make small main cookie icon to place next to item price? 
- Make upgrades dissapear when player is far away from them(no item,
  earlier upgrade for this item is not yet bought)
- Add statistics section
- Maybe get the rounding of numbers in order? Its all over the place as of now.
*/

var pepes = 100000;
var gpps = 0; // Global pepes per second

function mainButtonClick() {
  pepes += 1;
}

function updateCookiesAndGppsUi() {
  var pepesCounter = document.getElementById('pepe-counter');
  pepesCounter.innerHTML = 'You have ' + Math.round(pepes) + ' Pepes';
  document.getElementById('gpps-counter').innerHTML = gpps + ' PPS';

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

  for (var j = 0; j < upgrades.length; j++){ // goes through every upgrade and lights it up if player has enough pepes to buy it
    var upgradePrice = upgrades[j].querySelector('span.upgrade-price').innerHTML.replace(/\s/g, ''); // removes whitespace from the price
    if(pepes < upgradePrice){
      upgrades[j].style.opacity = '0.4';
    }
    else {
      upgrades[j].style.opacity = '1';
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
 // updateCookiesAndGppsUi(); // It was once here but i think its useless, in case everything breaks, check if this is the reason
}



function updateItemsPps(item) {
  document.getElementById(item.id).querySelector('span.shop-item-pps').innerHTML = 'PPS: ' + item.totalPps;
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
    event.target.querySelector('span.shop-item-amount').innerHTML = item.amount; // updates amount on UI
    event.target.querySelector('span.shop-item-price').innerHTML = item.price; // updates price on UI
    updateGpps();
    updateItemsPps(item);
  }
}

function upgradeItemEffectivness(item, effectivness, price, event) {
  if (pepes >= price) {
    pepes -= price;
    item.pps += Math.round((item.pps * (effectivness / 100)) * 100) / 100;
    item.pps = roundNumberTo2(item.pps);
    // ^ Adds effectivness percentages to the number and rounds it to 2 decimal places
    item.totalPps = roundNumberTo2(item.amount * item.pps); // updates items total pps
    updateGpps();
    event.target.parentElement.style.display = 'none';
    updateItemsPps(item);
  }
}

var items = [

  item1 = {
    id: 'item1',
    name: 'Feels Bad Man',
    firstPrice: 10, // price of the first bought item
    price: 10,
    pps: 1,
    amount: 0,
    totalPps: 0
  },

  item2 = {
    id: 'item2',
    name: 'Feels Good Man',
    firstPrice: 250,
    price: 250,
    pps: 10,
    amount: 0,
    totalPps: 0
  },

  item3 = {
    id: 'item3',
    name: 'Feels Amazing Man',
    firstPrice: 2000,
    price: 2000,
    pps: 100,
    amount: 0,
    totalPps: 0
  }
]

var upgrades = document.getElementsByClassName('upgrade-image');
console.log(upgrades);




setInterval(updateCookiesAndGppsUi, 1);
setInterval(function () {
  pepes += gpps / 25;
}, 40); // it actually adds 1 second worth of pepes every second, the timings are weird to make
// the counter look cool