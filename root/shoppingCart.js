

           
           var cena1 = parseInt(document.getElementById('cena1').value);
           var cena2 = parseInt(document.getElementById('cena2').value);
           var cena3 = parseInt(document.getElementById('cena3').value);
           var cena4 = parseInt(document.getElementById('cena4').value);
           var cena5 = parseInt(document.getElementById('cena5').value);
           var cena6 = parseInt(document.getElementById('cena6').value);
           var cena7 = parseInt(document.getElementById('cena7').value);
           var cena8 = parseInt(document.getElementById('cena8').value);
           var cena9 = parseInt(document.getElementById('cena9').value);
           var cena10 = parseInt(document.getElementById('cena10').value);
           
           var korpa = {
           ime_igre: ['tropico', 'CoD', 'ETS2', 'RLeague', 'F76', 'GTA5', 'PUBG', 'DOOM', 'Ride3'],
           cena: [cena1,cena2,cena3,cena4,cena5,cena6,cena7,cena8,cena9,cena10] 
         }

         function dodajKol(index){
           document.getElementById('reset_cart').style.display = "block";
           kolicina++;
           document.getElementById('kolicina').innerHTML = kolicina;
           suma = suma +  korpa.cena[index];
           document.getElementById('ukupno').innerHTML = suma;

           var addGame = korpa.ime_igre[index] +" "+korpa.cena[index] +" RSD <br>";
           allGame += addGame;
         }
         
         var kolicina = 0;
         var suma = 0; 
         var allGame = "";
         
      function shoppingInfo(){
        var prozor = window.open("","Info","toolbar= no, location=no, directories=no, status=no, scrollbars=no, resizable=yes, width=600, height=200 ");
        var text = "<html><head><title>Shopping Info</title></head><body bgcolor='gray'><center>";
        text += "<font  color='darkred'><h2>Shopping cart</h3>";
        text += "<h4>Igre:<br> <span>"+ allGame +"</span> </h4>";
        text += "<h4>Ukupno:"+ suma +" RSD </h4>";
        text += "<button style='padding:5px; background-color:gold; color:blue; border-radius:30%;'>Pay Now</button>";
        text += "</font></center></body></html>";
        prozor.document.write(text);
      }

      function resetCart(){
     
        document.getElementById('kolicina').innerHTML = 0;
        document.getElementById('ukupno').innerHTML = 0;
        kolicina = 0;
        suma = 0;
        allGame = "";
        document.getElementById('reset_cart').style.display = "none";
      }