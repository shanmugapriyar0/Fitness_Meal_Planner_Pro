'use strict';

console.log("script will be conected");

const toOpenRegisterationForm=()=>{
    window.location.href= "registerPage.html";
}

const toOpenLoginForm=()=>{
    window.location.href= "index.html";
}



const toShownUserDetails=()=>{
    
    const userDetails = document.getElementsByClassName("shownUserDetails");
    console.log("function will be called");
    console.log( document.getElementsByClassName("shownUserDetails").value);
    if (userDetails.style.visibility === 'hidden'){
        userDetails.style.visibility = 'visible';
    }
    else{
        userDetails.style.visibility = 'hidden';
    }
    
    
}

const handleSubmit =()=>{
    const userName= document.getElementById("loginInput").value
    const password = document.getElementById("loginInput1").value
    const postLogin = fetch('http://localhost:3005/login',{
    method:"POST",
    body: JSON.stringify({ username: userName,password: password })
    }).then((response)=>{
        return response;
    }).catch((err)=>{return err})
    console.log("postLogin:",postLogin)
}

const validatePassword=()=>{

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

