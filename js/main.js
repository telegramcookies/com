/* Telegram Cookies — Minimal JS */

(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.classList.toggle("active");
      toggle.setAttribute("aria-expanded", open);
    });

    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Map: click to interact, click outside to deactivate
  var mapWrapper = document.getElementById("map-wrapper");
  var mapOverlay = document.getElementById("map-overlay");

  if (mapOverlay && mapWrapper) {
    mapOverlay.addEventListener("click", function () {
      mapWrapper.classList.add("active");
    });

    document.addEventListener("click", function (e) {
      if (!mapWrapper.contains(e.target)) {
        mapWrapper.classList.remove("active");
      }
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var id = this.getAttribute("href");
      if (id === "#") return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  });
})();
