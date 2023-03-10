window.addEventListener("scroll", () => {
    const scrollPositionY = window.scrollY

    localStorage.setItem("scrollPositionY", scrollPositionY)
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the saved scroll position from localStorage
    var scrollPosition = localStorage.getItem('scrollPositionY');
  
    // If a scroll position was saved, scroll to that position
    if (scrollPosition !== null) {
        
      window.scrollTo(0, scrollPosition);
    }
  });