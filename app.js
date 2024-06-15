let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");
let layer = document.querySelectorAll(".layer");
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      span.classList.add("active");
    }, (idx + 1)*(400));
  });
  
});

// dark mode

var icon = document.getElementById("themebutton");
const footers = document.getElementsByClassName("footer__social--link");
let line2 = document.getElementById("line2")
let pfps = document.getElementsByClassName("about-me__picture--mask");
icon.onclick = function(){
  document.body.classList.toggle("dark-mode");
  for(let i = 0; i < pfps.length; i++){
    pfps[i].classList.toggle("dark-mode-pfp-shadow");
  }
  if(document.body.classList.contains("dark-mode")){
    line2.style.filter = "none"
    
    icon.src = "./assets/light.png";
    for(let i = 0; i < footers.length; i++){
      footers[i].classList.add("link__hover-effect--black");
      footers[i].classList.remove("link__hover-effect--white");
    }
} else{
  icon.src = "./assets/darkmode.png";
  line2.style.filter = "invert()"
  for(let i = 0; i < footers.length; i++){
    footers[i].classList.add("link__hover-effect--white");
    footers[i].classList.remove("link__hover-effect--black");
  }
}
}
