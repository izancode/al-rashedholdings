console.log("Javascript is running");
const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");

let i = 0,
  j = 1,
  intervalId;

const intervalFn = () => {
  intervalId = setInterval(() => {
    carousel.style.rotate = `-${++i * 45}deg`;
    // document.querySelector(".slide.active").classList.remove("active");

    // const activeSlide = document.querySelector(`.slide:nth-child(${++j})`);
    // console.log(activeSlide);
    // activeSlide.classList.add("active");
    // j == 8 && (j = 0);
  }, 2000);
};

intervalFn();
