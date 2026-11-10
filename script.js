const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
document.querySelectorAll(".nav a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

// Reveal sections as they enter the viewport.
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// Carry the selected product into the WhatsApp enquiry.
document.querySelectorAll(".order-link").forEach(link => {
  link.addEventListener("click", () => {
    const product = link.dataset.product || "your Diwali collection";
    const message = `Hello Krackilicious! I am interested in the ${product}. Please share more details.`;
    document.querySelector("#whatsapp-link").href =
      "https://wa.me/919673663191?text=" + encodeURIComponent(message);
  });
});

// Subtle festive sparkles; kept lightweight and disabled for reduced-motion users.
const sparkleLayer = document.querySelector(".sparkle-layer");
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const symbols = ["✦", "✧", "·"];
  function addSparkle() {
    const el = document.createElement("span");
    el.className = "sparkle";
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.left = Math.random() * 100 + "vw";
    el.style.top = Math.random() * 100 + "vh";
    el.style.fontSize = (8 + Math.random() * 12) + "px";
    sparkleLayer.appendChild(el);
    setTimeout(() => el.remove(), 2700);
  }
  setInterval(addSparkle, 420);
}
document.querySelector("#year").textContent = new Date().getFullYear();
