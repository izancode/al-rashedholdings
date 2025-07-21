console.log("Javascript is running");
window.addEventListener("scroll", function () {
  const navbar = document.querySelector("header nav");
  const currentScrollY = window.scrollY;

  if (currentScrollY > 0) {
    // Neeche scroll ho gaya, add class
    navbar.classList.add("headerScrolledUp");
  }

  if (currentScrollY === 0) {
    // Bilkul top par ho, class hatao
    navbar.classList.remove("headerScrolledUp");
  }
});

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

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    640: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 4,
    },
  },
});
// Go To Top
window.onscroll = function () {
  const goTopBtn = document.getElementById("goTopBtn");
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
};

// Function to scroll to the top
function goToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
