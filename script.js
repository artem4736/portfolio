window.addEventListener('load', () => {
  // Анімація при завантаженні сторінок
  gsap.from("section", {opacity: 0, y: 50, duration: 1, stagger: 0.3});

  // Прогрес-бари навичок
  const bars = document.querySelectorAll('.skill-bar');
  bars.forEach(bar => {
    const width = bar.getAttribute('data-width');
    gsap.to(bar, {width: width, duration: 1.5, ease: "power2.out", delay: 1});
  });

  // Перевірка темного режиму в локальному сховищі при завантаженні
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }
});

// Обробник події для темного режиму
const darkModeBtn = document.getElementById('darkModeBtn');
if (darkModeBtn) {
  darkModeBtn.addEventListener('click', () => {
    // Перемикаємо клас dark-mode
    document.body.classList.toggle('dark-mode');

    // Зберігаємо налаштування в локальному сховищі
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'true');
    } else {
      localStorage.setItem('darkMode', 'false');
    }
  });
}
const menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});


