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
    currentIndex = (currentIndex + 1) % slides.length; // ������������ �� ��������� �����
    showSlide(currentIndex);
}

// �������� ������ �����
showSlide(currentIndex);

// ������������ ������� ������ 3 ������� (3000 �����������)
setInterval(nextSlide, 3000);
