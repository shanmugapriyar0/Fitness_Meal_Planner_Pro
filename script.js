'use strict';


console.log("script will be conected");

const toOpenRegisterationForm=()=>{
    window.location.href= "registerPage.html";
}

const toOpenLoginForm=()=>{
    window.location.href= "index.html";
}

const toShownUserDetails=()=>{
    document.querySelector(".shownUserDetails").style.visibility='visible';
    document.querySelector(".todayExtraMeal").style.visibility='hidden';
    
}
const toHideUserDetails=()=>{
    document.querySelector(".shownUserDetails").style.visibility='hidden';
    document.querySelector(".todayExtraMeal").style.visibility='visible';
    
}
const handleSubmit = async (e) => {
    e.preventDefault();
    const email = document.getElementById("loginInput1").value.trim();
    const password = document.getElementById("loginInput2").value.trim();
    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    try {
        const response = await fetch('http://localhost:3005/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        // Check if the response is not ok
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || "Login failed.");
        }

        // Parse the response JSON
        const result = await response.json();
        alert(result.message || "Login successful!");

        // Redirect to homepage
        window.location.href = "homepage.html"; 
    } catch (error) {
        console.error("Error during login:", error);
        alert(error.message || "An error occurred. Please try again.");
    }
};


const handleSignUp =(e)=>{
    e.preventDefault();
    const Username = document.getElementById("username").value;
    const Email = document.getElementById("useremail").value;
    const Password =document.getElementById("pass1").value;
    const postLogin = fetch('http://localhost:3005/signUp',{
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({Username ,Email, Password })
        }).then((response)=>{
            return response;
        }).catch((err)=>{return err})
        console.log("postLogin:",postLogin)
    alert("Registeration Successfull!!...");
    window.location.href="index.html";
    
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
const foodItems = document.querySelector(".foodItems");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = document.querySelector(".card");
let isDragging = false, startX, startScrollLeft;

arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            foodItems.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
        });
});

const toCallSelectItem = () => {
        console.log("function will be called");
        let card = document.querySelector(".card");
        card.style.backgroundColor = "rgb(191, 218, 175)";
    };

    const dragStart = () => {
        isDragging = true;
        foodItems.classList.add("dragging");
        startX = e.pageX; 
        startScrollLeft = foodItems.scrollLeft;
    };
    
    const dragStop = () => {
        isDragging = false;
        foodItems.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const dragging = (e) => {
        if (!isDragging) return;
        foodItems.scrollLeft = e.pageX;
    };

foodItems.addEventListener("mousedown", dragStart);
foodItems.addEventListener("mousemove", dragging);


const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth()+1).padStart(2, "0");
const day = String(now.getDate()).padStart(2, '0');
const displayDate = () =>{
    console.log("its work");
    document.getElementById("date1").textContent = `${day}/${month}/${year}`;
    document.getElementById("date").textContent = `${day}/${month}/${year}`;
}
const hours = now.getHours();
const days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];
const dayName = days[now.getDay()];

let Menu = () =>{
    let dietImage1 = document.querySelector(".dietImage1");
    let dietImage2 = document.querySelector(".dietImage2");
    let dietImage3 = document.querySelector(".dietImage3");
    let InnerText1 = document.querySelector(".innerText1");
    let InnerText2 = document.querySelector(".innerText2");
    let InnerText3 = document.querySelector(".innerText3");

    if(dayName === 'Monday'){
        if(hours < 12){
            dietImage1.src="images/milk.jpg";
            InnerText1.innerHTML="1/2 glass Milk";
            dietImage2.src="images/apple.jpg";
            InnerText2.innerHTML="1 apple";
            dietImage3.src="images/bread.jpg";
            InnerText3.innerHTML="2 Bread";
        }
        else if(hours < 16){
            dietImage1.src="images/watermelon.jpg";
            InnerText1.innerHTML="1 cup watermelon";
            dietImage2.src="images/lemonJuice.jpg";
            InnerText2.innerHTML="1 cup lemonJuice";
            dietImage3.src="images/blank.png ";
            InnerText3.innerHTML=" ";
        }
        else if(hours < 18){
            dietImage1.src="images/orange.jpg";
            InnerText1.innerHTML="1 Orange";
            dietImage2.src="images/milk.jpg";
            InnerText2.innerHTML="1/2 glass Milk";
            dietImage3.src="images/blank.png ";
            InnerText3.innerHTML="";
    
        }
        else{
            dietImage1.src="images/watermelon";
            InnerText1.innerHTML="1/2 cup watermelon";
            dietImage2.src="images/muskmelon.jpg";
            InnerText2.innerHTML="1/2 bowl Muskmelon";
            dietImage3.src="images/blank.png";
            InnerText3.innerHTML="";    
            }
        
    }
    else if(dayName === 'Tuesday'){
        if(hours < 12){
            dietImage1.src="images/salad.jpg";
            InnerText1.innerHTML="Vegitable Salad";
            dietImage2.src="images/water.jpg";
            InnerText2.innerHTML="1 glass water";
            dietImage3.src="images/blank.png";
            InnerText3.innerHTML=""
        }
        else if(hours < 16){
            dietImage1.src="images/pear.jpg";
            InnerText1.innerHTML="2 Pear";
            dietImage2.src="images/lemonJuice.jpg";
            InnerText2.innerHTML="1 cup lemonJuice";
            dietImage3.src="images/blank.png ";
            InnerText3.innerHTML=" ";
        }
        else if(hours < 18){
            dietImage1.src="images/apple.jpg";
            InnerText1.innerHTML="1 apple";
            dietImage2.src="images/milk.jpg";
            InnerText2.innerHTML="1/2 glass Milk";
            dietImage3.src=" images/blank.png";
            InnerText3.innerHTML="";
    
        }
        else{
            dietImage1.src="images/brocooli";
            InnerText1.innerHTML="Broccoli & peas";
            dietImage2.src="images/water.jpg";
            InnerText2.innerHTML=" 1 glass Water";
            dietImage3.src="images/blank.png";
            InnerText3.innerHTML="";    
            }
    }
    else if(dayName === 'Wednesday'){
        if(hours < 12){
            dietImage1.src="images/muskmelon.jpg";
            InnerText1.innerHTML="1/2 bowl muskmelon";
            dietImage2.src="images/pear.jpg";
            InnerText2.innerHTML="1 Pear";
            dietImage3.src="images/blank.png";
            InnerText3.innerHTML=""
        }
        else if(hours < 16){
            dietImage1.src="images/fruitmix.jpg";
            InnerText1.innerHTML="1 cup Fruitmix";
            dietImage2.src="images/lemonJuice.jpg";
            InnerText2.innerHTML="1 cup lemonJuice";
            dietImage3.src="images/blank.png ";
            InnerText3.innerHTML=" ";
        }
        else if(hours < 18){
            dietImage1.src="images/dryfruits.jpg";
            InnerText1.innerHTML="Dryfruits";
            dietImage2.src="images/milk.jpg";
            InnerText2.innerHTML="1/2 glass Milk";
            dietImage3.src="images/blank.png";
            InnerText3.innerHTML="";
    
        }
        else{
            dietImage1.src="images/broccoli.jpg";
            InnerText1.innerHTML="1 Broccoli & Peas";
            dietImage2.src="images/water.jpg";
            InnerText2.innerHTML="1 glass water";
            dietImage3.src="images/blank.png";
            InnerText3.innerHTML="";    
            }
    }
    else if(dayName === 'Thursday'){
        if(hours < 12){
            dietImage1.src="images/banana.jpg";
            InnerText1.innerHTML="2 Banana";
            dietImage2.src="images/milk.jpg";
            InnerText2.innerHTML="1 glass Milk";
            dietImage3.src="images/bread.jpg";
            InnerText3.innerHTML="2 Bread";
        }
        else if(hours < 16){
            dietImage1.src="images/pear.jpg";
            InnerText1.innerHTML="2 Pear";
            dietImage2.src="images/vegetableSalad.jpg";
            InnerText2.innerHTML="1 cup VegetableSalad";
            dietImage3.src="images/blank.png ";
            InnerText3.innerHTML=" ";
        }
        else if(hours < 18){
            dietImage1.src="images/apple.jpg";
            InnerText1.innerHTML="1 apple";
            dietImage2.src="images/lemonJuice.jpg";
            InnerText2.innerHTML="1 glass LemonJuice";
            dietImage3.src=" images/blank.png";
            InnerText3.innerHTML="";
    
        }
        else{
            dietImage1.src="images/banana.jpg";
            InnerText1.innerHTML="1 Banana";
            dietImage2.src="images/milk.jpg";
            InnerText2.innerHTML=" 1 glass Milk";
            dietImage3.src="images/blank.png";
            InnerText3.innerHTML=" ";    
            }
    }
    else if(dayName === 'Friday'){
        if(hours < 12){
            dietImage1.src="images/milk.jpg";
            InnerText1.innerHTML="1/2 glass Milk";
            dietImage2.src="images/apple.jpg";
            InnerText2.innerHTML="1 apple";
            dietImage3.src="images/bread.jpg";
            InnerText3.innerHTML="2 Bread"
        }
        else if(hours < 16){
            dietImage1.src="images/brownrice.jpg";
            InnerText1.innerHTML="1 cup Brownrice";
            dietImage2.src="images/lemonJuice.jpg";
            InnerText2.innerHTML="1 cup lemonJuice";
            dietImage3.src="images/blank.png ";
            InnerText3.innerHTML=" ";
        }
        else if(hours < 18){
            dietImage1.src="images/orange.jpg";
            InnerText1.innerHTML="1 Orange";
            dietImage2.src="images/milk.jpg";
            InnerText2.innerHTML="1/2 glass Milk";
            dietImage3.src="images/blank.png ";
            InnerText3.innerHTML="";
    
        }
        else{
            dietImage1.src="images/banana";
            InnerText1.innerHTML="1 banana";
            dietImage2.src="images/muskmelon.jpg";
            InnerText2.innerHTML="1/2 bowl Muskmelon";
            dietImage3.src="images/blank.png";
            InnerText3.innerHTML="";    
            }
        
    }
    else if(dayName === 'Saturday'){
        if(hours < 12){
            dietImage1.src="images/salad.jpg";
            InnerText1.innerHTML="1 bowl Salad";
            dietImage2.src="images/milk.jpg";
            InnerText2.innerHTML="1 glass milk";
            dietImage3.src="images/blank.png";
            InnerText3.innerHTML=""
        }
        else if(hours < 16){
            dietImage1.src="images/fruitmix.jpg";
            InnerText1.innerHTML="1 cup fruitmix";
            dietImage2.src="images/lemonJuice.jpg";
            InnerText2.innerHTML="1 cup lemonJuice";
            dietImage3.src="images/blank.png ";
            InnerText3.innerHTML=" ";
        }
        else if(hours < 18){
            dietImage1.src="images/banana.jpg";
            InnerText1.innerHTML="1 Banana";
            dietImage2.src="images/milk.jpg";
            InnerText2.innerHTML="1/2 glass Milk";
            dietImage3.src="images/blank.png ";
            InnerText3.innerHTML="";
    
        }
        else{
            dietImage1.src="images/orange";
            InnerText1.innerHTML="1 Orange";
            dietImage2.src="images/muskmelon.jpg";
            InnerText2.innerHTML="1/2 bowl Muskmelon";
            dietImage3.src="images/blank.png";
            InnerText3.innerHTML="";    
            }
        
    }
    else{
        if(hours < 12){
            dietImage1.src="images/Oats.jpg";
            InnerText1.innerHTML="1 bowl Milk";
            dietImage2.src="images/water.jpg";
            InnerText2.innerHTML="1 glass Water";
            dietImage3.src="images/bread.jpg";
            InnerText3.innerHTML="2 Bread"
        }
        else if(hours < 16){
            dietImage1.src="images/vegetableSalad.jpg";
            InnerText1.innerHTML="1 cup VegetableSalad";
            dietImage2.src="images/lemonJuice.jpg";
            InnerText2.innerHTML="1 cup lemonJuice";
            dietImage3.src="images/blank.png ";
            InnerText3.innerHTML=" ";
        }
        else if(hours < 18){
            dietImage1.src="images/dryFruits.jpg";
            InnerText1.innerHTML="DryFruits";
            dietImage2.src="images/milk.jpg";
            InnerText2.innerHTML="1/2 glass Milk";
            dietImage3.src="images/blank.png ";
            InnerText3.innerHTML="";
    
        }
        else{
            dietImage1.src="images/peat.jpg";
            InnerText1.innerHTML="2 Pear";
            dietImage2.src="images/milk.jpg";
            InnerText2.innerHTML="2 glass Milk";
            dietImage3.src="images/blank.png";
            InnerText3.innerHTML="";    
            }
        
    }
    
}


const calendar = () =>{
    if (hours < 12){ 
        const breakFast = document.getElementById('breakfast');
        breakFast.innerHTML = "8:00 am BreakFast";
        breakFast.style.backgroundColor = "rgb(191, 218, 175)";
        Menu();
    }
    else if(hours < 16){
        const lunch= document.getElementById('lunch')
        lunch.innerHTML = "12:30 pm Lunch";
        lunch.style.backgroundColor = "rgb(191, 218, 175)";
        Menu();
    }
    else if(hours < 18){
        const snacks= document.getElementById('snacks');
        snacks.innerHTML = "5:00 pm Snacks";
        snacks.style.backgroundColor = "rgb(191, 218, 175)";
        Menu();
    }
    else{
        const dinner = document.getElementById('dinner');
        dinner.innerHTML = "8:00 pm Dinner";
        dinner.style.backgroundColor = "rgb(191, 218, 175)";
        console.log("It should be executed");
        Menu();
    }
}
const gaugeElement = document.querySelector(".gauge");
const calorieMeter= (gauge,val) =>{
    let rotation = val/500;
    if(rotation < 0 || rotation > 1){
        return ;
    }
    console.log("calorie called",rotation);
    gauge.querySelector(".guage--fill").style.transform = `rotate(${rotation}turn)`;
    gauge.querySelector(".guage--cover").textContent = `${val} calories`;
}

const calorieValue = () =>{
    const calorie = document.getElementById("calorieValue");
    let dayIndex = days.indexOf(dayName);
    let calories;
    if (hours < 12){ 
        calories=[240, 220, 180 ,160 , 250, 300, 270];
        calorie.textContent=calories[dayIndex];
        calorieMeter(gaugeElement,calories[dayIndex]);
    }
    else if(hours < 16){
        calories=[330, 320, 280 ,260 , 350, 270, 290];
        calorie.textContent=calories[dayIndex];
        calorieMeter(gaugeElement,calories[dayIndex]);
    }
    else if(hours < 18){
        calories=[140, 160, 90 ,100 , 50, 70,200];
        calorie.textContent=calories[dayIndex];
        calorieMeter(gaugeElement,calories[dayIndex]);
    }  
    else{
        calories=[230, 120, 180 ,200 , 315, 240,290];
        calorie.textContent=calories[dayIndex];
        calorieMeter(gaugeElement,calories[dayIndex]);
    }

}


// Ensure DOM is loaded before accessing the canvas
  

document.addEventListener("DOMContentLoaded", () => {
    calendar();
    Menu();
    displayDate();
    calorieValue();
});

const handleExtraMealModal=()=> {
    const modalElement = document.getElementById('extraMealModal');
    const modalInstance = new bootstrap.Modal(modalElement); // Initialize the modal
    modalInstance.show(); // Call the show() method on the initialized instance
}
function closed(){return;}

