const titulos = document.querySelectorAll('.LOGO, #presentacion__texto, #servicios h1, #proyectos h1, .card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible'); // 👈 esto permite que se repita
    }
  });
}, {
  threshold: 0.2 // puedes ajustar cuánto debe estar visible para activarse
});

titulos.forEach(el => observer.observe(el));
