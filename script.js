let lastScrollTop = 0;
const header = document.querySelector("header");
console.log(header)
const toTop = document.querySelector(".to-top");
const heroSection = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const heroSectionOffsetTop = heroSection.offsetTop;

  if (scrollTop > heroSectionOffsetTop) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }

  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
});


  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".appointment-form");
    const overlay = document.getElementById("confirmation-overlay");
    const closeBtn = document.getElementById("close-confirmation");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      overlay.classList.remove("hidden");
      form.reset(); // optional reset
    });

    closeBtn.addEventListener("click", () => {
      overlay.classList.add("hidden");
    });
  });