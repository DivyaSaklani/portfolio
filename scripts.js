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

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var navbar = document.getElementById("header");
        
        if (window.scrollY > 50) { 
            navbar.classList.add("scrolled"); // Add border when scrolling
        } else {
            navbar.classList.remove("scrolled"); // Remove border when at top
        }
    });
});


document.addEventListener("DOMContentLoaded",typeEffect); /* Ensures the effect starts after the html is loaded */

document.addEventListener("DOMContentLoaded", function() {
var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-container3'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './images/animation3.json',
});
});
document.addEventListener("DOMContentLoaded", function() {
var animation2 = lottie.loadAnimation({
    container: document.getElementById('lottie-container1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './images/animation1.json',
});
});