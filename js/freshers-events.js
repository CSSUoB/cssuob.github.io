document.addEventListener("DOMContentLoaded", () => {
  const countdown = document.querySelector("[data-freshers-countdown]");

  if (countdown) {
    const target = new Date(countdown.dataset.countdownTo).getTime();
    const days = countdown.querySelector("[data-countdown-days]");
    let countdownTimer;

    const updateCountdown = () => {
      const remaining = target - Date.now();

      if (!Number.isFinite(target) || remaining <= 0) {
        window.clearInterval(countdownTimer);
        countdown.remove();
        return false;
      }

      days.textContent = String(Math.ceil(remaining / 86400000));
      return true;
    };

    if (updateCountdown()) {
      countdownTimer = window.setInterval(updateCountdown, 1000);
    }
  }

  document.querySelectorAll("[data-events-carousel]").forEach((carousel) => {
    const track = carousel.querySelector("[data-events-track]");
    const previous = carousel.querySelector("[data-events-previous]");
    const next = carousel.querySelector("[data-events-next]");

    if (!track || !previous || !next) return;

    const endTolerance = 4;

    const updateControls = () => {
      const maximumScroll = track.scrollWidth - track.clientWidth;
      previous.disabled = track.scrollLeft <= endTolerance;
      next.disabled = track.scrollLeft >= maximumScroll - endTolerance;
    };

    const move = (direction) => {
      const gap =
        Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
      const card = track.querySelector(".freshers-event-card");

      if (!card) return;

      track.scrollBy({
        left: direction * (card.getBoundingClientRect().width + gap),
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
    };

    previous.addEventListener("click", () => move(-1));
    next.addEventListener("click", () => move(1));
    track.addEventListener("scroll", updateControls, { passive: true });
    window.addEventListener("resize", updateControls);

    updateControls();
  });
});
