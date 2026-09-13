document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("hamburger-menu");
  const desktopDropdowns = document.querySelectorAll("header .right .dropdown");
  const desktopCloseTimers = new WeakMap();

  const clearDesktopCloseTimer = (dropdown) => {
    const timer = desktopCloseTimers.get(dropdown);

    if (timer) {
      window.clearTimeout(timer);
      desktopCloseTimers.delete(dropdown);
    }
  };

  const updateDesktopDropdown = (dropdown, isExpanded, openedBy = "") => {
    if (!isExpanded) clearDesktopCloseTimer(dropdown);

    const trigger = dropdown.querySelector(":scope > button");
    trigger?.setAttribute("aria-expanded", String(isExpanded));
    dropdown.classList.toggle("open", isExpanded);
    dropdown.dataset.openedBy = isExpanded ? openedBy : "";
  };

  const setDesktopDropdownExpanded = (
    dropdown,
    isExpanded,
    openedBy = "activation",
  ) => {
    if (isExpanded) {
      desktopDropdowns.forEach((otherDropdown) => {
        if (otherDropdown !== dropdown) {
          updateDesktopDropdown(otherDropdown, false);
        }
      });
    }

    updateDesktopDropdown(dropdown, isExpanded, openedBy);
  };

  desktopDropdowns.forEach((dropdown) => {
    const trigger = dropdown.querySelector(":scope > button");
    let pointerActivated = false;

    dropdown.addEventListener("pointerenter", () => {
      clearDesktopCloseTimer(dropdown);

      if (trigger?.getAttribute("aria-expanded") === "false") {
        setDesktopDropdownExpanded(dropdown, true, "hover");
      }
    });

    dropdown.addEventListener("pointerleave", () => {
      if (
        dropdown.dataset.openedBy === "hover" &&
        !dropdown.contains(document.activeElement)
      ) {
        const timer = window.setTimeout(() => {
          desktopCloseTimers.delete(dropdown);

          if (
            !dropdown.matches(":hover") &&
            !dropdown.contains(document.activeElement)
          ) {
            setDesktopDropdownExpanded(dropdown, false);
          }
        }, 300);

        desktopCloseTimers.set(dropdown, timer);
      }
    });

    trigger?.addEventListener("pointerdown", () => {
      pointerActivated = true;
    });

    trigger?.addEventListener("click", () => {
      const isExpanded = trigger.getAttribute("aria-expanded") === "true";

      if (
        pointerActivated &&
        isExpanded &&
        dropdown.dataset.openedBy === "hover"
      ) {
        dropdown.dataset.openedBy = "activation";
      } else {
        setDesktopDropdownExpanded(dropdown, !isExpanded);
      }

      pointerActivated = false;
    });

    dropdown.addEventListener("focusout", (event) => {
      if (
        !dropdown.contains(event.relatedTarget) &&
        !dropdown.matches(":hover")
      ) {
        setDesktopDropdownExpanded(dropdown, false);
      }
    });
  });

  document.addEventListener("pointerdown", (event) => {
    desktopDropdowns.forEach((dropdown) => {
      if (!dropdown.contains(event.target)) {
        setDesktopDropdownExpanded(dropdown, false);
      }
    });
  });

  const setMenuOpen = (isOpen, returnFocus = false) => {
    menu.classList.toggle("visible", isOpen);
    document.body.classList.toggle("mobile-menu-open", isOpen);
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
    if (event.key !== "Escape") return;

    if (menu.classList.contains("visible")) {
      setMenuOpen(false, true);
      return;
    }

    const openDropdown = Array.from(desktopDropdowns).find(
      (dropdown) =>
        dropdown
          .querySelector(":scope > button")
          ?.getAttribute("aria-expanded") === "true",
    );

    if (openDropdown) {
      const trigger = openDropdown.querySelector(":scope > button");
      setDesktopDropdownExpanded(openDropdown, false);
      trigger?.focus();
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
