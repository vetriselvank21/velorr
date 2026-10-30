
(() => {
  "use strict";

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  function initScrollEffects() {
    // Floating WhatsApp quote button
    const button = document.createElement("a");
    button.className = "floating-quote";
    button.href =
      "https://wa.me/917550399569?text=Hello%20Velorr%20Industries%2C%20I%20would%20like%20a%20quote.";
    button.target = "_blank";
    button.rel = "noopener noreferrer";
    button.setAttribute(
      "aria-label",
      "Get a quote from Velorr Industries on WhatsApp"
    );

    button.innerHTML = `
      <span aria-hidden="true">💬</span>
      <span>Get a Quote on WhatsApp</span>
    `;

    document.body.appendChild(button);

    const elements = document.querySelectorAll(
      "main section, .product-card, .gallery-item, .hero-visual, .map-card"
    );

    // Keep everything visible if motion is disabled or unsupported.
    if (
      reducedMotion ||
      !("IntersectionObserver" in window)
    ) {
      elements.forEach((el) => el.classList.add("is-revealed"));
      button.classList.add("is-visible");
      return;
    }

    document.documentElement.classList.add("has-scroll-reveal");

    elements.forEach((el, index) => {
      el.classList.add("scroll-reveal");

      if (el.matches(".product-card, .gallery-item")) {
        el.classList.add(
          `scroll-reveal-delay-${(index % 4) + 1}`
        );
      }
    });

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -30px 0px"
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Show the quote button after scrolling 320px.
    function updateButton() {
      button.classList.toggle(
        "is-visible",
        window.scrollY > 320
      );
    }

    window.addEventListener("scroll", updateButton, {
      passive: true
    });

    updateButton();
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initScrollEffects,
      { once: true }
    );
  } else {
    initScrollEffects();
  }
})();
