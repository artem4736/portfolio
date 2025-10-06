// Плавна анімація GSAP
window.addEventListener('load', () => {
  gsap.from("section", {opacity:0, y:50, duration:1, stagger:0.3});
  // Прогрес-бари навичок
  const bars = document.querySelectorAll('.skill-bar');
  bars.forEach(bar => {
    const width = bar.getAttribute('data-width');
    gsap.to(bar, {width: width, duration: 1.5, ease: "power2.out", delay: 1});
  });
});
// Темний режим
 const darkModeBtn = document.getElementById('darkModeBtn');
darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

