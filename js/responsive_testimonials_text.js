function adjustTextElements() {
    var firstText = document.querySelector(".testimonials-text");
    var firstTextHeight = firstText.clientHeight;

    if (window.matchMedia("(max-width: 445px)").matches) 
    {
        firstTextHeight -= 35;
    }

    var testimonialsTextElements = document.querySelectorAll(".testimonials-text");
    for (var i = 0; i < testimonialsTextElements.length; i++) {
        testimonialsTextElements[i].style.minHeight = firstTextHeight + "px";
    }
}

window.onload = adjustTextElements;
window.onresize = adjustTextElements;
