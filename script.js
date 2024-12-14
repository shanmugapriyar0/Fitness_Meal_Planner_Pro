'use strict';

console.log("script will be conected");

function toOpenRegisterationForm(){
    window.location.href= "registerPage.html";
}

function toOpenLoginForm(){
    window.location.href= "index.html";
}


function validatePassword(){

    const pass1 = document.getElementById("pass1").value;
    const pass2 = document.getElementById("pass2").value;
    const message = document.getElementById("message");
    if(pass1.length < 8){
        message.style.color = "red";
        message.innerText = "Password must be at least 8 characters long." ;
    }
    else if(pass1 === pass2){
        message.style.color = "green";
        message.innerText = "Password should be matched!";
    }
    else{
        message.style.color = "red";
        message.innerText = "Password do not match.";
    }
}

