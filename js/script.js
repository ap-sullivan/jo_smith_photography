var swiper = new Swiper(".mySwiper", {
    
  slidesPerView: 3,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    breakpoints: {
      0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      700: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
      950: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
});



// Makes the parallax element blur on scroll once the about section comes into the viewport

gsap.set(".parallax-hero", { filter: "blur(0px)" });
gsap.to(".parallax-hero", {
  filter: "blur(8px)",
  scrollTrigger: {
    trigger: ".section-about",
    start: "top center",
    end: "top top",
    scrub: true,
    // markers: true
  }
});


// makes the about section blur on scroll but reveal at 800px into the parallax-hero element

gsap.set(".section-about", { filter: "blur(10px)" });
gsap.to(".section-about", {
  filter: "blur(0px)",
  scrollTrigger: {
    trigger: ".parallax-hero",
    start: "top top", 
      end: "+=800",
    scrub: true,
    // markers: true
  }
});


gsap.set(".section-about", { filter: "blur(0px)" });
gsap.to(".section-about", {
  filter: "blur(10px)",
  scrollTrigger: {
    trigger: ".section-service-cards",
    start: "top center", 
      end: "top top",
    scrub: true,
    // markers: true
  }
});




// fixed header - cant get working properly yet

// const showAnim = gsap.from('.fixed-header', { 
//   yPercent: -100,
//   paused: true,
//   duration: 0.2
// }).progress(1);

// ScrollTrigger.create({
//   start: "top top",
//   end: 99999,
//   onUpdate: (self) => {
//     self.direction === -1 ? showAnim.play() : showAnim.reverse()
//   }
// });

const btnNav = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNav.addEventListener('click', function() {
  headerEl.classList.toggle('nav-open')
  
})