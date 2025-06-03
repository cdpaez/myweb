document.querySelectorAll('.carrusel-btn-servicios').forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation(); // ✋ evita que el clic llegue al card
  });
});