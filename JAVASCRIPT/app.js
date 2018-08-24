/*
--TO DO
- Add upgrades functionality, onclick function with a paremeter of effectivness %
- Upgrades will be split into categories, single item effectivness,
  all items effectivness, click power?
- Add statistics section
- Make Buildings you dont have money for, stand out (low brightness fe.)
- Add more buildings
- Think of something for Paula to draw
- Save, Load mechanic
- Replace upgrade icons with actual buildings they upgrade (modified pics tho)
- Make upgrades dissapear when player is far away from them(no item,
  earlier upgrade for this item is not yet bought)
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
}

function updateGpps(){
  var toBeGpps = 0;
  for(var i = 0; i < items.length; i++){
    toBeGpps += items[i].totalPps;
  }
  toBeGpps = Math.round(toBeGpps);
  gpps = toBeGpps;
  updateCookiesAndGppsUi();
}

function roundNumberTo2(number) { // rounding number up to 2 decimal places to avoid rogue decimals
  return number = Math.round(number * 100) / 100;

}

function buyItem(event, self) {
  if (pepes >= self.price){
    pepes -= self.price;
    self.amount++;
    self.pps = roundNumberTo2(self.pps); 
    self.price = Math.floor(self.firstPrice * Math.pow(1.2, self.amount))
    self.totalPps = self.amount * self.pps; // updates items total pps
    event.target.querySelector('span.shop-item-amount').innerHTML = self.amount; // updates amount on UI
    event.target.querySelector('span.shop-item-price').innerHTML = self.price; // updates price on UI
    updateGpps();
  }
}

function upgradeItemEffectivness(item, effectivness, price, event){
  if (pepes >= price){
    pepes -= price;
    item.pps += Math.round((item.pps * (effectivness / 100)) * 100) / 100; 
    item.pps = roundNumberTo2(item.pps);
    // ^ Adds effectivness percentages to the number and rounds it to 2 decimal places
    item.totalPps = item.amount * item.pps; // updates items total pps
    updateGpps();
    console.log(event.target);
    event.target.parentElement.style.display = 'none';
  }
}

var items = [

  item1 = {
    name: 'Feels Bad Man',
    firstPrice: 10, // price of the first bought item
    price: 10,
    pps: 1,
    amount: 0,
    totalPps: 0
  },

  item2 = {
    name: 'Feels Good Man',
    firstPrice: 250,
    price: 250,
    pps: 10,
    amount: 0,
    totalPps: 0
  },

  item3 = {
    name: 'Feels Amazing Man',
    firstPrice: 2000,
    price: 2000,
    pps: 100,
    amount: 0,
    totalPps: 0
  }
]


setInterval(updateCookiesAndGppsUi, 1);
setInterval(function () {
  pepes += gpps / 25;
}, 40); // it actually adds 1 second worth of pepes every second, the timings are weird to make
// the counter look cool