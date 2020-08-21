
var i = 0;

       var imagesRoot = ['../images/baner1.jpg', '../images/baner2.jpg','../images/baner3.jpg','../images/baner4.jpg'];

       
        function changeImgR(){
            document.slide.src = imagesRoot[i];
   
            if(i < imagesRoot.length - 1){

              document.getElementById('navbg').style.animation = "fade 3s infinite";
              i++;
            }
            else{
              i = 0;
            }
            
            setTimeout("changeImgR()", 3000); 
           }


      

            
        
        
