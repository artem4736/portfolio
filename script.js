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
// Плаваюче меню при скролі

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll <= 0) {
    header.classList.remove('-translate-y-full');
  } 
  else if (currentScroll > lastScroll) {
    // Скролимо вниз — шапка ховається
    header.classList.add('-translate-y-full');
  } 
  else {
    // Скролимо вгору — шапка показується
    header.classList.remove('-translate-y-full');
  }

  lastScroll = currentScroll;
});




