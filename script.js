


// Menu toggle functionality
const menuBtn = document.querySelector('.menu-btn'); 
const navlinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navlinks.classList.toggle('mobile-menu');
});

// Slide show functionality
let currentIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');

    // Move the slides according to the current index
    slides.forEach((slide) => {
        slide.style.transform = `translateX(${-currentIndex * 100}%)`;
    });

    // Update the current index
    currentIndex = (currentIndex + 1) % slides.length;
}

// Show the initial slide
showSlides();

// Set an interval to change slides every 3 seconds (3000 milliseconds)
setInterval(showSlides, 3000);