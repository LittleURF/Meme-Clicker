var pepes = 0;

function mainButtonClick(){ 
 pepes++;
}

function updateCookies(){
    var pepesCounter = document.getElementById('pepe-counter');
    pepesCounter.innerHTML = 'You have ' + pepes + ' Pepes';
}

// setInterval(updateCookies, 1);