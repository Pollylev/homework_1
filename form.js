function checked(form){
  var my_firstname = document.getElementById("firstname");
  var my_secondname = document.getElementById("secondname");
  var my_theam = document.getElementById("theam");
  var my_date = document.getElementById("date");
if (form.tocka.checked){
    result_p.innerHTML=  my_firstname.value + my_secondname.value + my_theam.value + my_date.value;
  } 
else{
    result_p.innerHTML="";
  }
}