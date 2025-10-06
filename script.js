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
 const btn = document.getElementById('darkModeBtn');
  const html = document.documentElement;

  if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark');
  }

  btn.addEventListener('click', () => {
    html.classList.toggle('dark');
    if (html.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });


