const menu = document.querySelector("menu");
const btnMenu = document.querySelector(".menu-icon");

btnMenu.addEventListener("click", function(e) {
  e.preventDefault();
  menu.classList.add("activeted");
});

window.onclick = function(e) {
  if (
    e.target.tagName !== "MENU" &&
    !e.target.classList.contains("menu-icon")
  ) {
    menu.classList.remove("activeted");
  }
};
