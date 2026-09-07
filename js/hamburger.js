document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("hamburger-menu");
  const desktopDropdowns = document.querySelectorAll("header .right .dropdown");

  const setDesktopDropdownExpanded = (dropdown, isExpanded) => {
    const trigger = dropdown.querySelector(":scope > button");
    trigger?.setAttribute("aria-expanded", String(isExpanded));
  };

  desktopDropdowns.forEach((dropdown) => {
    dropdown.addEventListener("mouseenter", () => {
      setDesktopDropdownExpanded(dropdown, true);
    });

    dropdown.addEventListener("mouseleave", () => {
      setDesktopDropdownExpanded(
        dropdown,
        dropdown.contains(document.activeElement),
      );
    });

    dropdown.addEventListener("focusin", () => {
      setDesktopDropdownExpanded(dropdown, true);
    });

    dropdown.addEventListener("focusout", (event) => {
      setDesktopDropdownExpanded(
        dropdown,
        dropdown.matches(":hover") || dropdown.contains(event.relatedTarget),
      );
    });
  });

  const setMenuOpen = (isOpen, returnFocus = false) => {
    menu.classList.toggle("visible", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
    hamburger.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu",
    );

    if (returnFocus) hamburger.focus();
  };

  hamburger.addEventListener("click", () => {
    setMenuOpen(!menu.classList.contains("visible"));
  });

  menu.addEventListener("click", (event) => {
    if (event.target == menu) {
      setMenuOpen(false, true);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("visible")) {
      setMenuOpen(false, true);
    }
  });

  window
    .matchMedia("(min-width: 1051px)")
    .addEventListener("change", (event) => {
      if (event.matches) setMenuOpen(false);
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
