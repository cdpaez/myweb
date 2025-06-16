// const toggleBtn = document.getElementById('menu-toggle');
// const navbar = document.getElementById('navbar');
// const menuIcon = toggleBtn.querySelector('i'); // Aquí pescamos el <i> dentro del botón

// toggleBtn.addEventListener('click', () => {
//   navbar.classList.toggle('active');

//   // Cambiar el ícono del botón (hamburguesa <-> X)
//   if (navbar.classList.contains('active')) {
//     menuIcon.classList.remove('fa-bars');
//     menuIcon.classList.add('fa-xmark');
//   } else {
//     menuIcon.classList.remove('fa-xmark');
//     menuIcon.classList.add('fa-bars');
//   }
// });

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');

  menuToggle.addEventListener('click', function() {
    navbar.classList.toggle('active');
    
    // Cambiar ícono entre bars y times
    const icon = this.querySelector('i');
    if (navbar.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });

  // Cerrar menú al hacer clic en un enlace (opcional)
  const navLinks = document.querySelectorAll('.header__nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        navbar.classList.remove('active');
        menuToggle.querySelector('i').classList.remove('fa-times');
        menuToggle.querySelector('i').classList.add('fa-bars');
      }
    });
  });
});
