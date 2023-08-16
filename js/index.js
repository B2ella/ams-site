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