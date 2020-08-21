
var i = 0;
       var images = ['images/baner1.jpg', 'images/baner2.jpg','images/baner3.jpg','images/baner4.jpg'];

       function changeImg(){
         document.slide.src = images[i];

         if(i < images.length - 1){
          document.getElementById('navbg').style.animation = "fade 3s infinite";
              i++;
         }
         else{
           i = 0;
         }
         
         setTimeout("changeImg()", 3000); 
        }

        
     
      

    