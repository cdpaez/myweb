// para hacerle girar de manera individual
// const card = document.querySelector('.card__inner');
// card.addEventListener('click', function() {
//     card.classList.toggle('is-flipped');
// })


//para hacerle girar de forma grupal
const cards = document.querySelectorAll('.card__inner');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
  });
});