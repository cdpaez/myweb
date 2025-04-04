const toggleBtn = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const menuIcon = toggleBtn.querySelector('i'); // Aquí pescamos el <i> dentro del botón

toggleBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');

  // Cambiar el ícono del botón (hamburguesa <-> X)
  if (navbar.classList.contains('active')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-xmark');
  } else {
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
  }
});
