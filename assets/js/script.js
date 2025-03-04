;(function () {
  //Fixed Header
  const header = document.getElementById("header");

  function toggleHeader() {
    header.classList.toggle("scrolled", window.scrollY > 40);
  }

  toggleHeader();

  let lastScrollY = 0;
  let ticking = false;

  function onScroll() {
    lastScrollY = window.scrollY;

    if (!ticking) {
      requestAnimationFrame(() => {
        toggleHeader();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll);

  //Mobile Menu
  const burgerContainer = document.querySelector(".burger-container");
  const headerMenu = document.querySelector(".header__nav");
  const menuLinks = document.querySelectorAll(".nav__list-link");

  burgerContainer.addEventListener("click", function () {
    const burger = this.querySelector(".burger");
    burger.classList.toggle("burger-active");
    headerMenu.classList.toggle("active");
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      headerMenu.classList.remove("active");
      burgerContainer.querySelector(".burger").classList.remove("burger-active");
    });
  });

  //Image Slider
  function initImageSlider(containerSelector, interval = 3000) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const images = container.querySelectorAll(".promo__img");
    if (images.length < 2) return;

    let currentIndex = 0;
    images.forEach((img, index) => {
      img.style.position = "absolute";
      img.style.top = "0";
      img.style.left = "0";
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "cover";
      img.style.transition = "opacity 1s ease-in-out";
      img.style.opacity = index === 0 ? "1" : "0";
    });

    setInterval(() => {
      images[currentIndex].style.opacity = "0";
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].style.opacity = "1";
    }, interval);
  }

  initImageSlider(".promo__left");
  initImageSlider(".promo__right");
})();
