const nav = document.querySelector("nav");
const textButtons = document.querySelectorAll(".contact__btn");

const navLink = document.querySelector(".nav__links");
const navOpen = document.querySelector("#nav__toggle-open");
const navClose = document.querySelector("#nav__toggle-close");

// change nav style on scroll

window.addEventListener("scroll", () =>
  nav.classList.toggle("window-scrolled", window.scrollY > 0)
);

// Contact Circular button (text button)

textButtons.forEach((button) => {
  let text = button.querySelector("p");
  text.innerHTML = text.innerHTML
    .toUpperCase()
    .split("")
    .map(
      (char, i) =>
        `<span style="transform: rotate(${i * 12}deg)">${char}</span>`
    )
    .join("");
});

// Nav controls in tablet & mobile screens

const openNav = () => {
  navLink.style.display = "flex";
  navOpen.style.display = "none";
  navClose.style.display = "inline-block";
};
const closeNav = () => {
  navLink.style.display = "none";
  navOpen.style.display = "inline-block";
  navClose.style.display = "none";
};

navOpen.addEventListener("click", openNav);
navClose.addEventListener("click", closeNav);

if (document.querySelector.clientWidth < 1024) {
  navLink.querySelectorAll("li a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });
}

// Swiper custom script from the CDN

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    599: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1023: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
  },
});
