const nightMode = document.querySelector(".nightMode");
const body = document.querySelector("body");
const icon = document.querySelector("#iconnm");
const socialIcons = document.querySelectorAll(".iconnm");
const footer = document.querySelector("footer");
const text = document.querySelectorAll('p');
const headers = document.querySelectorAll('h1');
const states = document.querySelectorAll('h3');
let night = false;

nightMode.addEventListener("click", function () {
  
  night = !night 
  if (!night) {
    body.style.backgroundColor = "white";
    text.forEach((Element) => {
      Element.style.color = "hsl(223, 13%, 62%)";
       headers.forEach((Element) => {
         Element.style.color = "hsl(210, 3%, 27%)";
       });
    });
    footer.style.backgroundColor = "#ECF1F5";
    icon.style.color = 'black';
    socialIcons.forEach((Element) => {
      Element.style.color = "var(--p--text--)";
    });
    
  } else  {
    body.style.backgroundColor = "var(--nightMode--)";
      text.forEach((Element) => {
        Element.style.color = "hsla(0, 0%, 100%, 0.9)";
      });
       headers.forEach((Element) => {
         Element.style.color = "white";
       });
      
    footer.style.backgroundColor = "#242526";
    icon.style.color = "white";
    socialIcons.forEach((Element) => {
      Element.style.color = "white";
    });
   
  }
/* 
  states.addEventListener('mouseover',function(){
  if(body.style.backgroundColor = "var(--nightMode--)"){
    states.forEach((Element) => {
      Element.style.color = 'white'});
  }
}) */

 
});

