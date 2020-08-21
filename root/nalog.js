
function provera(){
  var  sifra1 = document.regForma.password.value;
  var sifra2 = document.regForma.password2.value;
  

try{
  document.regForma.nick.value = document.regForma.nick.value.replace(/\s+/g,'');
  var nick = document.regForma.nick.value;
if(nick == ""){
 throw "Nick ne sme biti prazan!";
 }
if(nick.length > 15 || nick.length < 3 ){
  document.regForma.nick.value = "";
  throw "Duzina nicka mora biti 3-15 karaktera!";
}

   document.regForma.ime.value = document.regForma.ime.value.replace(/\s+/g,'');
  var ime = document.regForma.ime.value;
 if(ime == ""){
  throw "Ime ne sme biti prazano!";
 }
 if(ime.length > 30 || ime.length < 3){
  document.regForma.ime.value = ""; 
  throw "Duzina imena mora biti 3-30 karaktera!";
 }
 if(prezime == ""){
  throw "Prezime ne sme biti prazano!";
 }
  document.regForma.prezime.value = document.regForma.prezime.value.replace(/\s+/g,'');
  var prezime = document.regForma.prezime.value;
 if(prezime.length > 30 || prezime.length < 3){
  document.regForma.prezime.value = "";
  throw "Duzina prezimena mora biti 3-30 karaktera!";
 }

  document.regForma.email.value = document.regForma.email.value.replace(/\s+/g,'');
  var email = document.regForma.email.value;
 if(email == ""){
  throw "E-mail ne sme biti prazan!";
 }
 if(email.length > 100 || email.length < 10){
  document.regForma.email.value = "";
  throw "Duzina mejla mora biti 10-30 karaktera!";
 }
 
 if(sifra1 == ""){
  throw "Sifra ne sme biti prazna!"; 
 }
 if(sifra1.length > 50 || sifra1.length < 10){
  document.regForma.password.value = "";
  throw "Duzina sifre mora biti 10-50 karaktera!"; 
 }
 if(sifra2 == ""){
  throw "Potvrdna sifra ne sme biti prazna!";
  
 }
 if(sifra2.length > 50 || sifra2.length < 10){
  document.regForma.password2.value = "";
  throw "Duzina potvrdne sifre mora biti 10-50 karaktera!";
 }
 if(sifra1 != sifra2){
  document.regForma.password.value = "";
  document.regForma.password2.value = "";
  throw("Sifre se ne poklapaju!");
  
}


  alert("Uspesno ste se registrovali!");
  return true; 
}
catch(errorReg){
  alert(errorReg);
  return false;
 }
}

function provera_L(){
  var nick_L = document.loginForma.nickLogIn.value;
  var pass = document.loginForma.passwordLogIn.value;
 
  try{
    document.loginForma.nickLogIn.value = document.loginForma.nickLogIn.value.replace(/\s+/g,'');
    nick_L = document.loginForma.nickLogIn.value;
if(nick_L == ""){
 throw "Nick ne sme biti prazan!";
}
if(nick_L.length > 15 || nick_L.length < 3 ){
  document.loginForma.nickLogIn.value = "";
  throw "Duzina nicka mora biti 3-15 karaktera!";
}
if(pass == ""){
  throw "Sifra ne sme biti prazna!";
}
if(pass.length > 50 || pass.length < 10){
  document.loginForma.passwordLogIn.value = "";
  throw "Duzina sifre mora biti 10-50 karaktera!";
}

 alert("Uspesan LogIn!!!");
 return true; 
  }
  catch(error_N){
    alert(error_N);
  return false;
  }
}