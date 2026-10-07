const menuBtn = document.querySelector(".menu-btn");
const mobileNav = document.querySelector(".mobile-nav");

if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const backTop = document.querySelector(".back-top");
window.addEventListener("scroll", () => {
  if (backTop) backTop.classList.toggle("show", window.scrollY > 500);
}, { passive: true });

backTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
