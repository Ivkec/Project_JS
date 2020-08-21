
  function showTime(){
    var datum = new Date();
    
    //time
    var h = datum.getHours();
    var min = datum.getMinutes();
    var sec = datum.getSeconds();
    //date
    var d = datum.getDate();
    var m = datum.getMonth();

    h = (h < 10) ? "0" + h : h;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    m = (m < 10) ? "0" + m : m;
    d = (d < 10) ? "0" + d : d;

    dat =  [d, m, datum.getFullYear()];
    time = [h, min, sec];

   document.getElementById('datum').innerHTML = dat.join(" / ");
   document.getElementById('vreme').innerHTML = time.join(":");   
   setTimeout(showTime, 1000); 
  }
   showTime();
   
    
