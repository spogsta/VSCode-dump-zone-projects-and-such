let firstname = '';
let lastname = '';
let hiringDate = '';
let position = '';
let hiringStage='';

function submit (){
    firstname=document.getElementById("fname").value;
    console.log(firstname);
    lastname=document.getElementById('lname').value;
    console.log(lastname);
    hiringDate = document.getElementById('hdate').value;
    console.log(hiringDate);
    position = document.getElementById('position').value;
    console.log(position);
    hiringStage = document.getElementById('hstep').value;
    console.log(hiringStage);
  
}