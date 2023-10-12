var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: '.swiper-button-next-unique',
    prevEl: '.swiper-button-prev-unique'
  },
  slidesPerView: 3,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
      delay: 3500,
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

// gsap.set(".section-about", { filter: "blur(10px)" });
// gsap.to(".section-about", {
//   filter: "blur(0px)",
//   scrollTrigger: {
//     trigger: ".parallax-hero",
//     start: "top top", 
//       end: "+=800",
//     scrub: true,
//     // markers: true
//   }
// });


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

// gsap.set(".section-service-cards", { filter: "blur(10px)" });
// gsap.to(".section-service-cards", {
//   filter: "blur(0px)",
//   scrollTrigger: {
//     trigger: ".section-about",
//     start: "top top", 
//       end: "+=800",
//     scrub: true,
//     // markers: true
//   }
// });



//Animnation for images sliding in on avout me section

const boxes = gsap.utils.toArray('.showcase-image');
boxes.forEach(image => {
  const anim = gsap.from(image, { rotation: -360, x: 900, duration: 1.5, paused: true });
  
  ScrollTrigger.create({
    trigger: image,
    start: "center 80%",
    onEnter: () => anim.play()
  });
  
  ScrollTrigger.create({
    trigger: image,
    start: "top bottom",
    onLeaveBack: () => anim.pause(0)
  });
});






// gsap.from(".service-card-container", { x: 1000, duration: 2,
//   scrollTrigger: {
//   trigger: ".service-card", //  the trigger element
// }
// });



gsap.from(".service-card", {x: 1500, rotate: 360, duration: 2, ease: "power2.inOut",
scrollTrigger:{
  trigger:".service-card", start:"top 90%",
toggleActions:"restart none none reset"} //these reset the animation - each one represents onEnter, onLeave, onEnterBack, onLeaveBack

});

gsap.to('.title-wrap', {width:'100%', duration: 1,
 scrollTrigger:
 {trigger:'.title-wrap', start:'top 80%', 
 toggleActions:'restart none none reset'}
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