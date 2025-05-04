let btn = document.querySelector(".btn");
let educationLink=document.querySelector("#education");
let educationSection=document.querySelector(".education");

let skillLink=document.querySelector("#skills");
let skillSection=document.querySelector(".skills");

let expLink=document.querySelector("#experience");
let expSection=document.querySelector(".experience");

let profLink=document.querySelector("#home2");
let profSection=document.querySelector(".home2");

let aboutLink=document.querySelector("#about");
let aboutSection=document.querySelector(".about");

let contactLink=document.querySelector("#contact");
let contactSection=document.querySelector(".contact");

btn.addEventListener("click", function () {
    const resumeUrl = "https://resumekraft.com/wp-content/uploads/2020/06/Front-End-Engineer-Resume-Sample.jpg";
    window.open(resumeUrl, "_blank");
});
educationLink.addEventListener("click",function(){
    educationSection.scrollIntoView({behavior:"smooth"})
})
skillLink.addEventListener("click",function(){
    skillSection.scrollIntoView({behavior:"smooth"})
})
expLink.addEventListener("click",function(){
    expSection.scrollIntoView({behavior:"smooth"})
})
profLink.addEventListener("click",function(){
    profSection.scrollIntoView({behavior:"smooth"})
})
aboutLink.addEventListener("click",function(){
    aboutSection.scrollIntoView({behavior:"smooth"})
})
contactLink.addEventListener("click",function(){
    contactSection.scrollIntoView({behavior:"smooth"})
})
