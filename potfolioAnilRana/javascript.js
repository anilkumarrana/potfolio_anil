

function lisMenu(){
    const lists = document.getElementById("menu_list");
    if(lists.style.display === "none"){
        lists.style.display="block";
    }else{
        lists.style.display="none"
    }
};
// this is experince dropdown hover


const skills_list = document.getElementById("skills_lists");
const skills = document.getElementById("skills");

skills.addEventListener("mouseover",()=>{
    skills_list.style.display ="block";
    skills_list.style.position="relative";
    skills_list.style.left="80%"
});


skills.addEventListener("mouseout",()=>{
    skills_list.style.display ="none";
});
 

const project_list = document.getElementById("project_lists");
const project = document.getElementById("project");
 
project.addEventListener("mouseover",()=>{
    project_list.style.display ="block";
});

project.addEventListener("mouseout",()=>{
    project_list.style.display="none";
});



const left_arrow = document.getElementById("left_arrow");
const right_arrow = document.getElementById("right_arrow");
const work_images = document.querySelectorAll("#work_image"); // Renamed for clarity
const sliderWrapper = document.querySelector(".slider-wrapper"); // Assuming wrapper exists

let CurrentPosition = 0;

function updateSlider() {
    const offset = -CurrentPosition * 100;
    sliderWrapper.style.transform = `translateX(${offset}%)`;
}

left_arrow.addEventListener("click", () => {
    CurrentPosition = (CurrentPosition === 0) ? work_images.length - 1 : CurrentPosition - 1;
    updateSlider();
});

right_arrow.addEventListener("click", () => {
    CurrentPosition = (CurrentPosition === work_images.length - 1) ? 0 : CurrentPosition + 1;
    updateSlider();
});


function paragrph (){
    const details = document.getElementById("paragraph");
    if(details.style.display==="none"){
        details.style.display="block"
    }else{
        details.style.display="none"
    }

}
function paragrph_02 (){
    const details = document.getElementById("paragraph_02");
    if(details.style.display==="none"){
        details.style.display="block"
    }else{
        details.style.display="none"
    }

}
function paragrph_03 (){
    const details = document.getElementById("paragraph_03");
    if(details.style.display==="none"){
        details.style.display="block"
    }else{
        details.style.display="none"
    }

}
function paragrph_04 (){
    const details = document.getElementById("paragraph_04");
    if(details.style.display==="none"){
        details.style.display="block"
    }else{
        details.style.display="none"
    }
}
 document.getElementById("button").addEventListener("click",function(){
    alert("Hii,I am Anil Kumar Rana ,I am a Web developer")
 })