let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Переключение на следующий слайд
    showSlide(currentIndex);
}

// Показать первый слайд
showSlide(currentIndex);

// Переключение слайдов каждые 3 секунды (3000 миллисекунд)
setInterval(nextSlide, 3000);
