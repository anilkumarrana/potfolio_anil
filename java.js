// let modBtn = document.querySelector(".change_background")
// let currMode = "light";

// modBtn.addEventListener("click",()=>{
//     if (currMode==="light"){
//         currMode="dark";
//         document.querySelector("body").style.backgroundColor="dark";
//     }
//     else{
//         currMode="light";
//         document.querySelector("body").style.backgroundColor="light";
//     }
// })


// prompt("Hello! I am an alert box!!");
// const btn1 = document.querySelector(".change_background")
// const currColor = "white"
// btn1.addEventListener("click" ,() =>{
//    if (btn1==="white"){
//     currColor="red"
//    }
//    else{
//     currColor="red"
//    }
// })



// document.getElementById('hamburger').addEventListener('click', function() {
//    document.querySelector('.navbar').classList.toggle('nav-active');
// });
// / Ensure the DOM is loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', function() {
        // Toggle the 'nav-active' class to show or hide the menu
        navbar.classList.toggle('nav-active');
    });
});
// Anil Rana and Full Stack Development