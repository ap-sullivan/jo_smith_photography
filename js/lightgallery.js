
// Light Gallery - gallery page Jquery

$(document).ready(function() {
    $("#lightgallery").lightGallery(); 
  });

  $(document).ready(function() {
    $("#lightgallery2").lightGallery(); 
  });

  const btnNav = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNav.addEventListener('click', function() {
  headerEl.classList.toggle('nav-open')
  
})