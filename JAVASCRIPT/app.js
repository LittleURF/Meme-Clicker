var pepes = 0;
var gpps = 0; // Global pepes per second

function mainButtonClick(){ 
 pepes += 1;
}

function updateCookies(){
    var pepesCounter = document.getElementById('pepe-counter');
    pepesCounter.innerHTML = 'You have ' + pepes + ' Pepes';
}

var item1 = {
    name: 'Feels Bad Man',
    price: 10,
    pps: 1,
    amount: 0,
    buy: function(){
        if(pepes >= this.price){
            pepes -= this.price;
            this.amount++;
            gpps += this.pps;

        }
    }

}

setInterval(updateCookies, 1);
setInterval(function(){ pepes += gpps; }, 1000);