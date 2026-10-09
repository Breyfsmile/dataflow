// Плавное появление блоков при скролле
document.documentElement.classList.add("js-ready");
document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  els.forEach((el) => observer.observe(el));

  // Простой обработчик формы (демо)
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Спасибо! Ваше сообщение отправлено (демо).");
      form.reset();
    });
  }
});