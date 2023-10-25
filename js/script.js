
// script for the my work gallery on home page

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  navigation: {
    nextEl: '.swiper-button-next-gallery',
    prevEl: '.swiper-button-prev-gallery'
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
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
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

// script for the testimonial carousel

var swiper2 = new Swiper(".testimonial-swiper", {
  navigation: {
    nextEl: '.swiper-button-next-testimonial',
    prevEl: '.swiper-button-prev-testimonial'
  },
  pagination: {
    effect: "fade",
    speed: 1500,
    loop: true,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false,
    },
  }
});




// Makes the parallax element blur on scroll once the about section comes into the viewport

gsap.set(".parallax-hero", { filter: "blur(0px)" });
gsap.to(".parallax-hero", {
  filter: "blur(8px)",
  scrollTrigger: {
    trigger: ".parallax-blur-start",
    start: "top center",
    end: "top top",
    scrub: true,
    // markers: true
  }
});

// Makes the about section blur on scroll once the services section comes into the viewport

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

gsap.set(".section-service-cards", { filter: "blur(0px)" });
gsap.to(".section-service-cards", {
  filter: "blur(10px)",
  scrollTrigger: {
    trigger: ".parallax-mid-section",
    start: "top center", 
      end: "top top",
    scrub: true,
  }
});

gsap.set(".section-my-work", { filter: "blur(0px)" });
gsap.to(".section-my-work", {
  filter: "blur(10px)",
  scrollTrigger: {
    trigger: ".section-testimonials",
    start: "top center", 
      end: "top top",
    scrub: true,
  }
});

gsap.set(".section-testimonials", { filter: "blur(0px)" });
gsap.to(".section-testimonials", {
  filter: "blur(10px)",
  scrollTrigger: {
    trigger: ".section-faq",
    start: "top center", 
      end: "top top",
    scrub: true,
  }
});

gsap.set(".section-faq", { filter: "blur(0px)" });
gsap.to(".section-faq", {
  filter: "blur(10px)",
  scrollTrigger: {
    trigger: ".section-contact",
    start: "top center", 
      end: "top top",
    scrub: true,
  }
});


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




gsap.from(".service-card", {x: 1500, rotate: 360, duration: 2, ease: "power2.inOut",
scrollTrigger:{
  trigger:".service-card", start:"top 90%",
toggleActions:"restart none none reset"} //these reset the animation - each one represents onEnter, onLeave, onEnterBack, onLeaveBack

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


// Hamburger menu

const btnNav = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNav.addEventListener('click', function() {
  headerEl.classList.toggle('nav-open')
  
})


// Faq section toggle

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})