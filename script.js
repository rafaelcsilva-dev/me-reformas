const header = document.getElementById("header");
const btnMenu = document.querySelectorAll(".btn-menu");
const menu = document.getElementById("menu");

/********************************************************************************/

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll) {
    // Rolando para baixo
    header.classList.add("hide-header");
  } else {
    // Rolando para cima
    header.classList.remove("hide-header");
  }

  lastScroll = currentScroll;
});

/********************************************************************************/

let menuState = false;

btnMenu.forEach((btn) => {
  btn.addEventListener("click", () => {
    menu.classList.toggle("hide-nav");
  });
});
