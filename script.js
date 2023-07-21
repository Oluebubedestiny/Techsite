const nav = document.querySelector("nav");
const toggle = document.querySelector(".toggle_btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    nav.classList.add("windows_scroll");
  } else nav.classList.remove("windows_scroll");
});

toggle.addEventListener("click", function () {
  var navbar = document.querySelector(".nav_toggle_btn");
  const logo = document.querySelector(".img_container");
  navbar.classList.toggle("show");
  logo.classList.toggle("hide");
});
