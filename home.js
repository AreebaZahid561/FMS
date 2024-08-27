document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      var featdiv = document.querySelector(".featdiv");
      var featdivPosition = featdiv.getBoundingClientRect().top;
  
      // Trigger the animation when featdiv is in view
      if (featdivPosition < window.innerHeight) {
        featdiv.classList.add("animate-slidein");
      }
    });
  });
  