/**
 * Signal Landing Page Kit — Interactions
 * Mobile nav toggle + FAQ accordion
 */

(function () {
  "use strict";

  /* ── Mobile Navigation ─────────────────────────────────────── */
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav__toggle");
  const mobileLinks = document.querySelectorAll(".nav__mobile-link");

  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    mobileLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
        toggle.focus();
      }
    });
  }

  /* ── FAQ Accordion ─────────────────────────────────────────── */
  const faqItems = document.querySelectorAll(".faq__item");

  faqItems.forEach(function (item) {
    const trigger = item.querySelector(".faq__question");

    if (!trigger) return;

    trigger.addEventListener("click", function () {
      const isOpen = item.classList.contains("is-open");

      faqItems.forEach(function (other) {
        other.classList.remove("is-open");
        const btn = other.querySelector(".faq__question");
        if (btn) btn.setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ── Smooth anchor offset for sticky nav ───────────────────── */
  const navHeight = document.querySelector(".nav");
  const offset = navHeight ? navHeight.offsetHeight + 16 : 80;

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      const id = this.getAttribute("href");
      if (!id || id === "#") return;

      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  });
})();
