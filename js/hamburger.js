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
});

function toggleShow(id) {
  let x = document.getElementById("hbdd_" + id);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
