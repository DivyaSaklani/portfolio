const text = " Hi! I'm  Divya Saklani";
const speed = 100;
let index = 0;
let typingText =  document.getElementById("typing-text");

function  typeEffect(){
    if(index<text.length){
      typingText .innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect,speed);
    }
    else{
        setTimeout(() =>{
            typingText.style.borderRight ="none"
        },450);
    }
}
document.addEventListener("DOMContentLoaded",typeEffect); /* Ensures the effect starts after the html is loaded */