/*Open or close header nav*/
$(document).ready(function() {
  $("#button-nav").click(function() {
    $("#nav").toggle();
  });
});

/* Open or close searchInput */
$(document).ready(function() {
  $(".desSearch").click(function() {
    $("#searchInput").toggle();
  });
});

$(document).ready(function() {
  $(".mobSearch").click(function() {
    $("#searchInput").toggle();
  });
});

(function() {
  "use strict";
  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  }

  function toggleHandler(toggle) {
    toggle.addEventListener("click", function(e) {
      e.preventDefault();
      this.classList.contains("is-active") === true
        ? this.classList.remove("is-active")
        : this.classList.add("is-active");
    });
  }
})();

/* Slider of block Home */
var slideWidth = 170;
var sliderTimer;
$(function() {
  $(".slides").width($(".slides").children().size() * slideWidth);
  sliderTimer = setInterval(nextSlide, 3000);
  $(".slider").hover(
    function() {
      clearInterval(sliderTimer);
    },
    function() {
      sliderTimer = setInterval(nextSlide, 3000);
    }
  );
  $("#next_slide").click(function() {
    clearInterval(sliderTimer);
    nextSlide();
    sliderTimer = setInterval(nextSlide, 3000);
  });
  $("#prev_slide").click(function() {
    clearInterval(sliderTimer);
    prevSlide();
    sliderTimer = setInterval(nextSlide, 3000);
  });
});

function nextSlide() {
  var currentSlide = parseInt($(".slides").data("current"));
  currentSlide++;
  if (currentSlide >= $(".slides").children().size()) {
    currentSlide = 0;
  }
  $(".slides")
    .animate({ left: -currentSlide * slideWidth }, 170)
    .data("current", currentSlide);
}

function prevSlide() {
  var currentSlide = parseInt($(".slides").data("current"));
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = $(".slides").children().size() - 1;
  }
  $(".slides")
    .animate({ left: -currentSlide * slideWidth }, 170)
    .data("current", currentSlide);
}

var htmlWidth = $("html").innerWidth();
if (htmlWidth < 992) {
  $(".desSearch").remove();
} else {
  $(".mobSearch").remove();
}

$(function() {
  $("#Email_contact").mask("{1,20}@{1,20}.*{3}");
});
