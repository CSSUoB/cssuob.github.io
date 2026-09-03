document.addEventListener("DOMContentLoaded", () => {
  let hamburger = document.getElementById("hamburger");
  let menu = document.getElementById("hamburger-menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("visible");
  });

  menu.addEventListener("click", (event) => {
    if (event.target == menu) {
      menu.classList.toggle("visible");
    }
  });

  window.matchMedia("(min-width: 1051px)").addEventListener("change", (event) => {
    if (event.matches) menu.classList.remove("visible");
  });
});

window.toggleShow = function (id) {
  const menu = document.getElementById("hamburger-menu");
  const selected = document.getElementById("hbdd_" + id);
  const shouldOpen = selected.style.display === "none";

  menu.querySelectorAll(".mobile-dropdown").forEach((dropdown) => {
    const isSelected = dropdown === selected && shouldOpen;
    dropdown.style.display = isSelected ? "block" : "none";
    const trigger = menu.querySelector(`[aria-controls="${dropdown.id}"]`);
    trigger?.setAttribute("aria-expanded", String(isSelected));
  });
};
