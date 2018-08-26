function worker_function() {

this.addEventListener('message', function(e){
  setInterval(function(){
    var pepesToAdd = e.data / 25;
    this.postMessage(pepesToAdd);

  }, 40);

  }, false);

  }
  
if(window!=self)
  worker_function();

    /*
  this.addEventListener('message', setInterval(function(e) {
    e.data.pepes += e.data.gpps /25;
}, 40), false);
}
*/