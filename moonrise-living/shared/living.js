/* Moonrise Living / shared interaction engine / v1.0
   A dependency-free, reusable service selector with honest demo pricing,
   accessible navigation, reduced-motion-aware reveals, and optional analytics hooks. */
(function () {
  "use strict";

  document.documentElement.classList.add("living-js");
  const cfg = window.MOONRISE_LIVING || {};
  const $ = (selector, parent) => (parent || document).querySelector(selector);
  const $$ = (selector, parent) => Array.from((parent || document).querySelectorAll(selector));
  const escapeText = (value) => String(value == null ? "" : value);
  const money = (amount) => new Intl.NumberFormat("en-US", {
    style: "currency", currency: "USD", maximumFractionDigits: 0
  }).format(amount);

  function track(name, fields) {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, fields || {});
    }
  }

  /* Navigation: works without an external framework. */
  const menu = $("#menu-toggle");
  const nav = $("#main-nav");
  function closeMenu() {
    if (!menu || !nav) return;
    menu.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-label", "Open menu");
    nav.classList.remove("open");
    document.body.classList.remove("menu-open");
  }
  if (menu && nav) {
    menu.addEventListener("click", function () {
      const willOpen = menu.getAttribute("aria-expanded") !== "true";
      menu.setAttribute("aria-expanded", String(willOpen));
      menu.setAttribute("aria-label", willOpen ? "Close menu" : "Open menu");
      nav.classList.toggle("open", willOpen);
      document.body.classList.toggle("menu-open", willOpen);
    });
    $$("a", nav).forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) closeMenu();
    }, {passive:true});
  }

  const header = $("#site-header");
  if (header) {
    const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 12);
    updateHeader();
    window.addEventListener("scroll", updateHeader, {passive: true});
  }

  /* Animations are intentionally light and respect motion preferences. */
  const revealElements = $$(".reveal");
  const motionReduced = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!motionReduced && "IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, {threshold:0.1, rootMargin:"0px 0px -25px 0px"});
    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("visible"));
  }

  /* Data comes from each client page's MOONRISE_LIVING object.
     Replace sample numbers with verified client rates BEFORE launch.
     Until then the interface explicitly identifies these as illustrations. */
  const fields = [
    {key:"pets",name:"pet",selector:"#pet-options"},
    {key:"services",name:"service",selector:"#service-options"},
    {key:"coats",name:"coat",selector:"#coat-options"}
  ];
  const optionsReady = fields.every((field) =>
    Array.isArray(cfg[field.key]) && cfg[field.key].length > 0 && $(field.selector));
  if (!optionsReady) return;

  const selected = {};
  fields.forEach(function (field) {
    const group = $(field.selector);
    group.textContent = "";
    cfg[field.key].forEach(function (option, index) {
      const label = document.createElement("label");
      label.className = "choice";
      const input = document.createElement("input");
      input.type = "radio";
      input.name = field.name;
      input.value = option.id;
      input.checked = index === 0;
      input.setAttribute("aria-label", option.label);
      const visual = document.createElement("span");
      visual.className = "choice-content";
      const title = document.createElement("strong");
      title.textContent = escapeText(option.label);
      visual.appendChild(title);
      if (option.detail) {
        const detail = document.createElement("small");
        detail.textContent = escapeText(option.detail);
        visual.appendChild(detail);
      }
      label.appendChild(input);
      label.appendChild(visual);
      group.appendChild(label);
      input.addEventListener("change", function () {
        if (!input.checked) return;
        selected[field.name] = option;
        renderResult();
        track("living_selector_changed", {
          category:field.name, selection:option.id,
          client:cfg.business || "demo"
        });
      });
    });
    selected[field.name] = cfg[field.key][0];
  });

  function buildInquiry() {
    const p = selected.pet;
    const s = selected.service;
    const c = selected.coat;
    const min = Number(p.min || 0) + Number(s.min || 0) + Number(c.min || 0);
    const max = Number(p.max || 0) + Number(s.max || 0) + Number(c.max || 0);
    return {
      min: min,
      max: max,
      label: escapeText(p.label) + " · " + escapeText(s.label),
      summary: "A one-on-one " + escapeText(s.label).toLowerCase() +
        " for a " + escapeText(p.label).toLowerCase() +
        " with a " + escapeText(c.label).toLowerCase() + " coat.",
      text: "Hello " + escapeText(cfg.business || "there") + "!\n" +
        "I'm interested in discussing a grooming visit.\n" +
        "Pet: " + escapeText(p.label) + "\n" +
        "Type of visit: " + escapeText(s.label) + "\n" +
        "Coat: " + escapeText(c.label) + "\n\n" +
        "I saw a demonstration website that showed a SAMPLE range of " +
        money(min) + "–" + money(max) + ". " +
        "I understand this was illustrative, not your actual price. " +
        "Could you tell me which services are suitable and provide an actual quote? Thank you!"
    };
  }

  function renderResult() {
    const result = buildInquiry();
    const pet = $("#result-pet");
    const price = $("#result-price");
    const summary = $("#result-summary");
    const warning = $("#result-warning");
    const contact = $("#result-contact");
    if (pet) pet.textContent = result.label;
    if (price) price.textContent = money(result.min) + "–" + money(result.max);
    if (summary) summary.textContent = result.summary;
    if (warning) warning.textContent = escapeText(cfg.estimateNote ||
      "Illustrative example only. Confirm availability, services and pricing with the business.");
    if (contact && cfg.contactUrl) contact.href = cfg.contactUrl;
    const status = $("#copy-status");
    if (status) status.textContent = "";
    return result;
  }

  const copyButton = $("#copy-summary");
  if (copyButton) {
    copyButton.addEventListener("click", async function () {
      const inquiry = buildInquiry().text;
      const status = $("#copy-status");
      let copied = false;
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(inquiry);
          copied = true;
        }
      } catch (error) {
        copied = false;
      }
      if (!copied) {
        const temporary = document.createElement("textarea");
        temporary.value = inquiry;
        temporary.setAttribute("aria-label", "Your grooming inquiry");
        temporary.style.position = "fixed";
        temporary.style.top = "0";
        temporary.style.left = "-9999px";
        document.body.appendChild(temporary);
        temporary.focus();
        temporary.select();
        try {
          copied = document.execCommand("copy");
        } catch (error) {
          copied = false;
        }
        document.body.removeChild(temporary);
      }
      if (copied) {
        if (status) status.textContent = "Copied! Paste these details into your message.";
        track("living_inquiry_copied", {client:cfg.business || "demo"});
      } else {
        if (status) status.textContent = "Copy is unavailable here. Please message the business using the link below.";
      }
    });
  }
  const contact = $("#result-contact");
  if (contact) {
    contact.addEventListener("click", function () {
      track("living_contact_clicked", {client:cfg.business || "demo"});
    });
  }
  renderResult();
})();