const slider = document.querySelector('.slider');
const sliderContainer = slider.querySelector('.slider-container');
const slides = sliderContainer.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentSlide = 0;
let slideWidth;
let autoplayInterval;

function updateSlider() {
    slideWidth = slides[0].offsetWidth;
    sliderContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
}

function startAutoplay() {
    if (slides.length === 0) return;
    autoplayInterval = setInterval(nextSlide, 5000);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
slider.addEventListener('mouseover', stopAutoplay);
slider.addEventListener('mouseout', startAutoplay);
window.addEventListener('resize', updateSlider);

if (slides.length > 0) {
    updateSlider();
    startAutoplay();
}
