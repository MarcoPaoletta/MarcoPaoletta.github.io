// script.js
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
    testimonials[currentIndex].classList.remove('active');
    currentIndex = (index + testimonials.length) % testimonials.length;
    testimonials[currentIndex].classList.add('active');
}

function changeTestimonial(offset) {
    const nextIndex = (currentIndex + offset + testimonials.length) % testimonials.length;
    showTestimonial(nextIndex);
}

showTestimonial(currentIndex);
