// slideshow
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slides = document.querySelector(".slideshow-container");
const track = document.querySelector(".track");

let width = slides.offsetWidth;
let i = 0;

window.addEventListener("resize", function () {
  width = slides.offsetWidth;
});

next.addEventListener("click", function (e) {
  e.preventDefault();
  i = i + 1;
  track.style.transform = "translateX(" + i * -width + "px)";
});

prev.addEventListener("click", function () {
  i = i - 1;
  track.style.transform = "translateX(" + i * -width + "px)";
});

// const toggle = document.getElementById('');
// toggle.onmouseover = function(){
//     toggle.classList.toggle('active')
// }


