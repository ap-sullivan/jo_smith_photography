

// Makes the parallax element blur on scroll once the about section comes into the viewport
gsap.registerPlugin(ScrollTrigger);
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

const btnNav = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNav.addEventListener('click', function() {
  headerEl.classList.toggle('nav-open')
  
})