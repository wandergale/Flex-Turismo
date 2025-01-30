const mobileMenu = document.querySelector(".mobile-menu");
const navList = document.querySelector(".nav-list");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  navList.classList.toggle("active");

  line1.classList.toggle("active");
  line2.classList.toggle("active");
  line3.classList.toggle("active");
});
