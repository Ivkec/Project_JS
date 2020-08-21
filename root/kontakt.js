
function validnost(){
  
try{
  document.kontaktForma.ime.value = document.kontaktForma.ime.value.replace(/\s+/g,'');
  var ime = document.kontaktForma.ime.value;
if(ime == ""){
throw "Ime ne sme biti prazano!";
}
if(ime.length > 30 || ime.length < 3){
  document.kontaktForma.ime.value = "";
  throw "Duzina imena mora biti 3-30 karaktera!";
}


  document.kontaktForma.prezime.value = document.kontaktForma.prezime.value.replace(/\s+/g,'');
  var prezime = document.kontaktForma.prezime.value;
if(prezime == ""){
  throw "Prezime ne sme biti prazano!";
}
if(prezime.length > 30 || prezime.length < 3){
  document.kontaktForma.prezime.value = "";
  throw "Duzina prezimena mora biti 3-30 karaktera!";
}


  document.kontaktForma.telefon.value = document.kontaktForma.telefon.value.replace(/\s+/g,'');
  var telefon = document.kontaktForma.telefon.value;
if(telefon == ""){
  throw "Telefon polje ne sme biti prazno!";
}
if(telefon.length < 10){
  document.kontaktForma.telefon.value = "";
  throw "Duzina tel. mora biti 10 karaktera!";
}
if(telefon != Number(telefon)){
  ocument.kontaktForma.telefon.value = "";
  throw "Telefon mora sadrzati iskljucivo brojeve!!!";
}

  document.kontaktForma.email.value = document.kontaktForma.email.value.replace(/\s+/g,'');
  var email = document.kontaktForma.email.value;
if(email == ""){
document.kontaktForma.email.value = "";
throw "E-mail polje ne sme biti prazano!";
}
if(email.length > 100 || email.length < 10){
  document.kontaktForma.email.value = "";
  throw "Duzina mejla mora biti 10-100 karaktera!";
}

var poruka = document.kontaktForma.poruka.value;
if(poruka == "" || poruka.length > 500){
throw "Poruka ne sme biti prazna i duza od 500 karaktera!";
}

alert("Podaci su uspesno poslati!");
return true;
}
catch(error){
alert(error);
return false;
}

}