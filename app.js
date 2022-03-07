const navbar = document.querySelector(".links");
const btns = document.querySelectorAll("button");

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    navbar.classList.toggle("show-links");
  });
});
