document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menu-btn");
  const menu = document.querySelector(".menu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});