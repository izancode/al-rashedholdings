console.log("Javascript is running");
let lastScrollY = window.scrollY;

// window.addEventListener("scroll", function () {
//   var navbar = document.querySelector("header nav");
//   let currentScrollY = window.scrollY;

//   if (currentScrollY < lastScrollY && currentScrollY > 110) {
//     navbar.classList.add("headerScrolledUp");
//   } else if (currentScrollY > lastScrollY || currentScrollY <= 110) {
//     navbar.classList.remove("headerScrolledUp");
//   }

//   lastScrollY = currentScrollY;
// });
function openNavigation() {
  const nav = document.querySelector("header nav .menu");
  const icon = document.querySelector(".hamburger img");
  nav.classList.toggle("menu-active");
  if (nav.classList.contains("menu-active")) {
    icon.src = "../../assets/images/icon/close.svg";
  } else {
    icon.src = "../../assets/images/icon/hamburger.svg"; // Change back to hamburger icon when menu is closed
  }
}
const slides = document.querySelectorAll(".slide");
let offset = 0;

setInterval(() => {
  slides.forEach((slide, index) => {
    let newIndex = (index + offset) % slides.length;
    // console.log("newIndex", newIndex);
    slide.style.setProperty("--i", newIndex);
  });
  offset = (offset + 1) % slides.length;
}, 2000);
