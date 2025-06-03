// const carrusel_servicios = document.querySelector('.carrusel-items-servicios');
// const slides_servicios = document.querySelectorAll('.slide-servicios');
// const btnPrev_servicios = document.querySelector('.carrusel-btn-servicios.prev');
// const btnNext_servicios = document.querySelector('.carrusel-btn-servicios.next');

// let currentIndexServicios = 0;

// function updateCarrusel() {
//   carrusel_servicios.style.transform = `translateX(-${currentIndexServicios * 100}%)`;
// }

// btnNext_servicios.addEventListener('click', () => {
//   if (currentIndexServicios < slides_servicios.length - 1) {
//     currentIndexServicios++;
//   } else {
//     currentIndexServicios = 0; // vuelve al inicio (loop)
//   }
//   updateCarrusel();
// });

// btnPrev_servicios.addEventListener('click', () => {
//   if (currentIndexServicios > 0) {
//     currentIndexServicios--;
//   } else {
//     currentIndexServicios = slides_servicios.length - 1; // va al final (loop)
//   }
//   updateCarrusel();
// });

// // Opcional: cambio automático cada 5 segundos 🕒
// setInterval(() => {
//   btnNext_servicios.click();
// }, 5000);

document.querySelectorAll('.carrusel-servicios').forEach(carrusel => {
  const carruselItems = carrusel.querySelector('.carrusel-items-servicios');
  const slides = carrusel.querySelectorAll('.slide-servicios');
  const btnPrev = carrusel.querySelector('.carrusel-btn-servicios.prev');
  const btnNext = carrusel.querySelector('.carrusel-btn-servicios.next');

  let currentIndex = 0;

  function updateCarrusel() {
    carruselItems.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  btnNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarrusel();
  });

  btnPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarrusel();
  });

  // Cambio automático cada 5 segundos (opcional)
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarrusel();
  }, 5000);
});