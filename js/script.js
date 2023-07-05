/*Mobile Menu Functions */
const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault()
  const nav = document.getElementById('menu-mobile')
  nav.classList.toggle('activemobile')
  const activemobile = nav.classList.contains('activemobile')
  event.currentTarget.setAttribute('aria-expanded', activemobile)
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)
  
  
  /*Slide show Banner Initial */

  const slides = document.querySelectorAll('.slide');
    let btns = document.querySelectorAll('.btn-slide');
    let currentSlide = 1;

    // Javascript for banner slider manual navigation
    let manualNav = function(manual){
      slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
          btn.classList.remove('active');
        });
      });

      slides[manual].classList.add('active');
      btns[manual].classList.add('active');
    }

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
      });
    });
    
  
      /*--------------------------
      1. Newsletter Popup
      ---------------------------*/
      setTimeout(function () {
          $('.popup_wrapper').css({
              "opacity": "1",
              "visibility": "visible"
          });
          $('.popup_off').on('click', function () {
              $(".popup_wrapper").fadeOut(500);
          })
      }, 2500);
  
      /*----------------------------*/

    // Javascript for banner slider autoplay navigation
    const repeat = function(activeClass){
      let active = document.getElementsByClassName('active');
      let i = 1;

      let repeater = () => {
        setTimeout(function(){
          [...active].forEach((activeSlide) => {
            activeSlide.classList.remove('active');
          });

        slides[i].classList.add('active');
        btns[i].classList.add('active');
        i++;

        if(slides.length == i){
          i = 0;
        }
        if(i >= slides.length){
          return;
        }
        repeater();
      }, 10000);
      }
      repeater();
    }
    repeat();

    /*End Slides Banners */

    /*Start Slides Videos  */

    const slidesVideo = document.querySelectorAll('.videoslide');
    let btnsVideo = document.querySelectorAll('.btn-videoslide');
    let currentSlideVideo = 1;

    
    // Javascript for video slider manual navigation
    let manualNavVideo = function(manual){
      slidesVideo.forEach((slideVideo) => {
        slideVideo.classList.remove('videoactive');

        btnsVideo.forEach((btnvideo) => {
          btnvideo.classList.remove('videoactive');
        });
      });

      slidesVideo[manual].classList.add('videoactive');
      btnsVideo[manual].classList.add('videoactive');
    }

    btnsVideo.forEach((btnvideo, i) => {
      btnvideo.addEventListener("click", () => {
        manualNavVideo(i);
        currentSlideVideo = i;
      });
    });

    // Javascript for videos slider autoplay navigation
    const repeatVideo = function(videoactiveClass){
      let videoactive = document.getElementsByClassName('videoactive');
      let i = 1;

      let repeater = () => {
        setTimeout(function(){
          [...videoactive].forEach((videoactiveSlide) => {
            videoactiveSlide.classList.remove('videoactive');
          });

        slidesVideo[i].classList.add('videoactive');
        btnsVideo[i].classList.add('videoactive');
        i++;

        if(slidesVideo.length == i){
          i = 0;
        }
        if(i >= slidesVideo.length){
          return;
        }
        repeater();
      }, 5000);
      }
      repeater();
    }
    repeatVideo();

 // Javascript for Banner Medicine Online

 const slidesMedicine = document.querySelectorAll('.medicineslide');
  
    let currentSlideMedicine = 1;

 const repeatMedicine = function(medicineactiveClass){
  let medicineactive = document.getElementsByClassName('medicineactive');
  let i = 1;

  let repeater = () => {
    setTimeout(function(){
      [...medicineactive].forEach((medicineactiveSlide) => {
        medicineactiveSlide.classList.remove('medicineactive');
      });

    slidesMedicine[i].classList.add('medicineactive');
    
    i++;

    if(slidesMedicine.length == i){
      i = 0;
    }
    if(i >= slidesMedicine.length){
      return;
    }
    repeater();
  }, 15000);
  }
  repeater();
}
repeatMedicine();

/*JavaScript for cards mobile */

const slidesCarousel = document.querySelectorAll('[data-js="carousel__item"]')
const nextButton = document.querySelector('[data-js="carousel__button--next"]')
const prevButton = document.querySelector('[data-js="carousel__button--prev"]')

const lastSlideIndex = slidesCarousel.length - 1
let currentSlideIndex = 0

const manipulateSlideClasses = correctSlideIndex => {
  slidesCarousel.forEach(slideCarousel => slideCarousel.classList.remove('carousel__item--visible'))
  slidesCarousel[correctSlideIndex].classList.add('carousel__item--visible')
}

nextButton.addEventListener('click', () => {
   const correctSlideIndex = currentSlideIndex ===slidesCarousel.length -1
   ? currentSlideIndex = 0
   : ++currentSlideIndex

   manipulateSlideClasses(correctSlideIndex)
  } )


prevButton.addEventListener('click', () => {
  const correctSlideIndex = currentSlideIndex === 0
  ? currentSlideIndex = slidesCarousel.length -1
  : --currentSlideIndex

  manipulateSlideClasses(correctSlideIndex)

  })




