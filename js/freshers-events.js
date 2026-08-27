window.sa_event =
  window.sa_event ||
  function (...args) {
    window.sa_event.q = window.sa_event.q || [];
    window.sa_event.q.push(args);
  };

document.addEventListener("DOMContentLoaded", () => {
  const campaignElement = document.querySelector("[data-freshers-campaign]");
  const campaign = campaignElement?.dataset.freshersCampaign || "freshers";

  const trackCampaignEvent = (name, metadata = {}) => {
    window.sa_event(name, { campaign, ...metadata });
  };

  document.querySelectorAll("[data-freshers-social]").forEach((link) => {
    link.addEventListener("click", () => {
      trackCampaignEvent("freshers_social_click", {
        platform: link.dataset.freshersSocial,
        placement: link.dataset.freshersPlacement,
      });
    });
  });

  const countdown = document.querySelector("[data-freshers-countdown]");

  if (countdown) {
    const target = new Date(countdown.dataset.countdownTo).getTime();
    const days = countdown.querySelector("[data-countdown-days]");
    const unit = countdown.querySelector("[data-countdown-unit]");
    let countdownTimer;

    const updateCountdown = () => {
      const remaining = target - Date.now();

      if (!Number.isFinite(target) || remaining <= 0) {
        window.clearInterval(countdownTimer);
        countdown.remove();
        return false;
      }

      const remainingDays = Math.ceil(remaining / 86400000);
      days.textContent = String(remainingDays);
      unit.textContent = remainingDays === 1 ? "day" : "days";
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

    if (!track) return;

    const viewedCards = new WeakSet();
    const recordEventView = (card) => {
      if (viewedCards.has(card)) return;

      viewedCards.add(card);
      trackCampaignEvent("freshers_event_view", {
        event_title: card.dataset.freshersEventTitle,
        event_date: card.dataset.freshersEventDate,
        event_location: card.dataset.freshersEventLocation,
      });
    };

    const eventCards = track.querySelectorAll("[data-freshers-event]");

    if ("IntersectionObserver" in window) {
      const cardObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              recordEventView(entry.target);
              cardObserver.unobserve(entry.target);
            }
          });
        },
        { root: track, threshold: 0.5 },
      );

      eventCards.forEach((card) => cardObserver.observe(card));
    } else {
      eventCards.forEach(recordEventView);
    }

    if (!previous || !next) return;

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
