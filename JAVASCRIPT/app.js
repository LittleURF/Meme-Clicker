var pepes = 10000;
var gpps = 0; // Global pepes per second

function mainButtonClick(){ 
 pepes += 1;
}

function updateCookies(){
    var pepesCounter = document.getElementById('pepe-counter');
    pepesCounter.innerHTML = 'You have ' + pepes + ' Pepes';
}

function buyItem(event, self){
    console.log(self);
    if(pepes >= self.price){
        pepes -= self.price;
        self.amount++;
        gpps += self.pps;
        self.price = Math.floor(self.firstPrice * Math.pow(1.2, self.amount))
        self.totalPps = self.amount * self.pps; // updates items total pps
        event.target.querySelector('span.shop-item-amount').innerHTML = self.amount; // updates amount on UI
        event.target.querySelector('span.shop-item-price').innerHTML = self.price; // updates price on UI
        document.getElementById('gpps-counter').innerHTML = gpps + ' PPS'; // updates gpps on UI

    }
}


var item1 = {
    name: 'Feels Bad Man',
    firstPrice: 10, // price of the first bought item
    price: 10,
    pps: 1,
    amount: 0,
    totalPps: 0
    };

var item2 = {
    name: 'Feels Good Man',
    firstPrice: 250,
    price: 250,
    pps: 10,
    amount: 0,
    totalPps: 0
    };

var item3 = {
    name: 'Feels Amazing Man',
    firstPrice: 2000,
    price: 2000,
    pps: 100,
    amount: 0,
    totalPps: 0 
    };



setInterval(updateCookies, 1);
setInterval(function(){ pepes += gpps; }, 1000);