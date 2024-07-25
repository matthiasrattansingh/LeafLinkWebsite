

// --------------------  slider in effects (carousel)-------------------------

//definitions
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nxtButton = document.querySelector('.button--right');
const preButton = document.querySelector('.button--left');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// display all the slides
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition); 


//making arrow buttons work


//general function to get amount of slide
const moveToSlide = (track, currentSlide, targetSlide) =>{
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
}

const hideShowNav = (slides, preButton, nxtButton, targetIndex) =>{
  if (targetIndex == 0){
    preButton.classList.add('is-hidden');
    nxtButton.classList.remove('is-hidden'); 
    } else if (targetIndex === slides.length - 1) {
      preButton.classList.remove('is-hidden');
      nxtButton.classList.add('is-hidden');
    } else{
      preButton.classList.remove('is-hidden');
      nxtButton.classList.remove('is-hidden');
    }
}

// arrow buttons
nxtButton.addEventListener('click', e =>{
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;

  const currentDot = dotsNav.querySelector('.current-slide');
  const nextDot = currentDot.nextElementSibling;
  updateDots(currentDot, nextDot);

  moveToSlide(track, currentSlide, nextSlide);

  const nextIndex = slides.findIndex(slide => slide === nextSlide);
  hideShowNav(slides, preButton, nxtButton, nextIndex);
})

preButton.addEventListener('click', e =>{
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;

  const currentDot = dotsNav.querySelector('.current-slide');
  const prevDot = currentDot.previousElementSibling;
  updateDots(currentDot, prevDot);

  moveToSlide(track, currentSlide, prevSlide);

  const prevIndex = slides.findIndex(slide => slide === prevSlide);
  hideShowNav(slides, preButton, nxtButton, prevIndex);
})


//making dots work

dotsNav.addEventListener('click', e =>{
  const targetDot = e.target.closest('button');

  const currentSlide = track.querySelector('.current-slide');
  const currentDot = dotsNav.querySelector('.current-slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);

  //making arrow reappear when on next slide
  hideShowNav(slides, preButton, nxtButton, targetIndex);

})
