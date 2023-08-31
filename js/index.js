// slideshow
const slideshow = document.querySelectorAll('.cards-slideshow');
const prev = document.querySelectorAll('.prev');
const next = document.querySelectorAll('.next');
let slideshowCards = document.querySelectorAll('.cards-slideshow div');

//Next Carousel
slideshow.forEach((slide, index)=>{
  
const nextSlide = () => {
    if(slideshowCards[slideshowCards.length - 1]) {
      slide.scrollTo(0, 0); 
    } 
    slide.scrollBy(300, 0);
};

next[index].addEventListener('click', e => {
  nextSlide(); 
});

//Prev Carousel
const prevSlide = () => {
   if(slideshowCards[0]) {
    slide.scrollTo(4800,0);
   }
   slide.scrollBy(-300, 0); 
};

prev[index].addEventListener('click', e => {
    prevSlide(); 
});
})

// <div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
// <div style="color: var(--Dark-blue);">
//   <p class="tag"><img width="40" height="40" src="https://img.icons8.com/officel/40/000000/horizontal-line.png" alt="horizontal-line"/> OUR SOLUTIONS</p>
// <h5 class="pb-4" style="width: 1000px;">Choose from one of our bespoke solutions to accomplish your goals</h5>
// <div class="row">
// <!---1. Card-->
// <div class="col">
// <div class="card rounded-0" style=" height: 200px;">
// <div class="m-0"  id="hidden">
//   <h6 class="card-title position-absolute start-0 p-3">Irrigation</h6>
//   <img src="./images/Section 3 - Our Solutions/irrigation.png"  style="height: 200px; width: 300px;" class="card-img-top" alt="irrigation">
//   <i class="bi bi-arrow-right position-absolute end-0 bottom-0 p-4 fs-5"></i>
// </div>
// <div class="card-body">
//   <h6 class="card-title">Irrigation</h6>
// </div>
// </div> 
// </div>
// <!---2. Card-->
// <div class="col">
// <div class="card rounded-0" style="width: 322px; height: 200px;">
// <div class="m-0"  id="hidden">
// <h6 class="card-title position-absolute start-0 p-3">Water Storage</h6>
// <img src="./images/Section 3 - Our Solutions/water storage.png"  style="height: 200px; width: 300px;" class="card-img-top" alt="water storage">
// <i class="bi bi-arrow-right position-absolute end-0 bottom-0 p-4 fs-5"></i>
// </div>
// <div class="card-body">
// <h6 class="card-title">Water Storage</h6>
// </div>
// </div> 
// </div>

// <!---3. Card-->
// <div class="col">
// <div class="card rounded-0" style="width: 322px; height: 200px;">
// <div class="m-0"  id="hidden">
// <h6 class="card-title position-absolute start-0 p-3">Water Treatment</h6>
// <img src="./images/Section 3 - Our Solutions/water treatment.png"  style="height: 200px; width: 300px;" class="card-img-top" alt="water treatment.png">
// <i class="bi bi-arrow-right position-absolute end-0 bottom-0 p-4 fs-5"></i>
// </div>
// <div class="card-body">
// <h6 class="card-title">Water Treatment</h6>
// </div>
// </div> 
// </div>
// </div>

// <div class="row pt-4">
// <!---4. Card-->
// <div class="col">
// <div class="card rounded-0" style="width: 322px; height: 200px;">
// <div class="m-0"  id="hidden">
//   <h6 class="card-title position-absolute start-0 p-3">Water Control</h6>
//   <img src="./images/Section 3 - Our Solutions/water control.png"  style="height: 200px; width: 300px;" class="card-img-top" alt="water control">
//   <i class="bi bi-arrow-right position-absolute end-0 bottom-0 p-4 fs-5"></i>
// </div>
// <div class="card-body">
//   <h6 class="card-title">Water Control</h6>
// </div>
// </div> 
// </div>

// <!---5. Card-->
// <div class="col">
// <div class="card rounded-0" style="width: 322px; height: 200px;">
// <div class="m-0"  id="hidden">
// <h6 class="card-title position-absolute start-0 p-3">Boreholes & <br>Pumps</h6>
// <img src="./images/Section 3 - Our Solutions/Boreholes & pumps.png"  style="height: 200px; width: 300px;" class="card-img-top" alt="Boreholes & pumps">
// <i class="bi bi-arrow-right position-absolute end-0 bottom-0 p-4 fs-5"></i>
// </div>
// <div class="card-body">
// <h6 class="card-title">Boreholes & Pumps</h6>
// </div>
// </div> 
// </div>

// <!---6. Card-->
// <div class="col">
// <div class="card rounded-0" style="width: 322px; height: 200px;">
// <div class="m-0"  id="hidden">
// <h6 class="card-title position-absolute start-0 p-3">Poultry</h6>
// <img src="./images/Section 3 - Our Solutions/poultry.png"  style="height: 200px; width: 300px;" class="card-img-top" alt="poultry.png">
// <i class="bi bi-arrow-right position-absolute end-0 bottom-0 p-4 fs-5"></i>
// </div>
// <div class="card-body">
// <h6 class="card-title">Poultry</h6>
// </div>
// </div> 
// </div>
// </div>
// </div>
// </div>