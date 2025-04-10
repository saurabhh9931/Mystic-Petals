//           for navbar backgound 

const navbar = document.getElementById('navbar');

// Add scroll event listener
window.addEventListener('scroll', () => {
  // When scroll is greater than 50px, add solid background
  if (window.scrollY > 50) {
    navbar.classList.remove('transparent');
    navbar.classList.add('solid');
  } else {
    // Revert to transparent background when scrolled up
    navbar.classList.remove('solid');
    navbar.classList.add('transparent');
  }
});



let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}





function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

document.getElementById("search-icon").addEventListener("click", function() {
    let searchContainer = document.querySelector(".search-container");
    searchContainer.classList.toggle("active");
});
