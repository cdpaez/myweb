const carrusel = document.querySelector('.carrusel-items');
  const slides = document.querySelectorAll('.slide');
  const btnPrev = document.querySelector('.carrusel-btn.prev');
  const btnNext = document.querySelector('.carrusel-btn.next');

  let currentIndex = 0;

  function updateCarrusel() {
    carrusel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  btnNext.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // vuelve al inicio (loop)
    }
    updateCarrusel();
  });

  btnPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = slides.length - 1; // va al final (loop)
    }
    updateCarrusel();
  });

  // Opcional: cambio automático cada 5 segundos 🕒
  setInterval(() => {
    btnNext.click();
  }, 5000);