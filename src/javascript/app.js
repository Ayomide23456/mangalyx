"use strict";

// Splash Screen - Show only on first visit per session
document.addEventListener("DOMContentLoaded", () => {
  const splashScreen = document.getElementById("splash-screen");
  const splashShown = sessionStorage.getItem("splashShown");

  if (splashShown) {
    if (splashScreen) {
      splashScreen.style.display = "none";
    }
    initCarousel();
  } else {
    sessionStorage.setItem("splashShown", "true");
    setTimeout(() => {
      if (splashScreen) {
        splashScreen.style.display = "none";
      }
      initCarousel();
    }, 5000);
  }
});

function initCarousel() {
  const carouselInner = document.getElementById("carousel-inner");
  const carouselIndicators = document.querySelectorAll(".carousel-indicator");
  const imgCarousel = document.getElementsByClassName("img-carousel");
  let index = 0;
  let intervalId;

  function showSlide(slideIndex) {
    index = slideIndex;
    if (index >= imgCarousel.length) index = 0;
    if (index < 0) index = imgCarousel.length - 1;

    carouselInner.style.transform = `translateX(-${index * 100}%)`;

    // Update indicators
    carouselIndicators.forEach((indicator, i) => {
      indicator.classList.toggle("bg-opacity-100", i === index);
      indicator.classList.toggle("bg-opacity-50", i !== index);
    });
  }

  function showNextImage() {
    showSlide(index + 1);
  }

  function showPrevImage() {
    showSlide(index - 1);
  }

  function startAutoSlide() {
    intervalId = setInterval(showNextImage, 4000);
  }

  function stopAutoSlide() {
    clearInterval(intervalId);
  }

  // Initialize first slide
  showSlide(0);
  startAutoSlide();

  // Add indicator click handlers
  carouselIndicators.forEach((indicator, i) => {
    indicator.addEventListener("click", () => {
      showSlide(i);
      stopAutoSlide();
      startAutoSlide(); // Restart auto-slide after manual interaction
    });
  });

  // Pause on hover
  const carousel = document.querySelector(".carousel");
  if (carousel) {
    carousel.addEventListener("mouseenter", stopAutoSlide);
    carousel.addEventListener("mouseleave", startAutoSlide);
  }
}

document.querySelector(".btn").addEventListener("click", function () {
  window.location.href = "readerPage.html";
});

document.querySelectorAll(".manga-card").forEach(card => {
  card.addEventListener("click", function () {
    const id = card.dataset.id;
    window.location.href = `mangaDetails.html?id=${id}`;
  });
});
