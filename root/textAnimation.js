function blink(){
  txt = document.getElementById('gzAnime');
  if(txt.style.color == "green"){
      txt.style.color = "lime";
  }
  else{
      txt.style.color = "green"; 
  }     
  setTimeout("blink();",250);

 }
     
      

    