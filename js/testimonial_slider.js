let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
let isTransitioning = false;

function disableArrows() {
    document.querySelector('.arrow-left').style.pointerEvents = 'none';
    document.querySelector('.arrow-right').style.pointerEvents = 'none';
}

function enableArrows() {
    document.querySelector('.arrow-left').style.pointerEvents = 'auto';
    document.querySelector('.arrow-right').style.pointerEvents = 'auto';
}

function fadeOut(element, callback) {
    isTransitioning = true;
    element.style.transition = 'opacity 0.5s';
    element.style.opacity = '0';
    setTimeout(function () {
        isTransitioning = false;
        enableArrows();
        callback();
    }, 500);
}

function fadeIn(element) {
    isTransitioning = true;
    element.style.transition = 'opacity 0.5s';
    element.style.opacity = '1';
    setTimeout(function () {
        isTransitioning = false;
        enableArrows();
    }, 600);
}

function showTestimonial(index) {
    if (isTransitioning) {
        return;
    }

    disableArrows();

    fadeOut(testimonials[currentIndex], function () {
        testimonials[currentIndex].classList.remove('active');
        currentIndex = (index + testimonials.length) % testimonials.length;

        testimonials[currentIndex].classList.add('active');
        setTimeout(function () {
            fadeIn(testimonials[currentIndex]);
        }, 0);
    });
}

function changeTestimonial(offset) {
    if (!isTransitioning) {
        const nextIndex = (currentIndex + offset + testimonials.length) % testimonials.length;
        showTestimonial(nextIndex);
    }
}
