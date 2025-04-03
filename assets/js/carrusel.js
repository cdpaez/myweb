/*variable inicio del carrusel*/
let currentIndex = 0
const images = document.querySelectorAll(".wrapper-items img")
const totalImages = images.length

/*constantes que apuntan a los controles */
const nextSlide = document.querySelector(".next")
const prevSlide = document.querySelector(".prev")

/*funcion cambiar slide */

function updateCarousel(){
  const offset = -currentIndex * 100
  console.log(typeof(offset))

  document.querySelector(".wrapper-items").style.transform = `translateX(${offset}%)`
}

/*funcionamiento siguiente contenido*/
nextSlide.addEventListener("click", () =>  {
  currentIndex = (currentIndex + 1) % totalImages
  updateCarousel()
})

/*funcionamiento contenido anterior*/
prevSlide.addEventListener("click", () => {
  currentIndex = (currentIndex -1 + totalImages) % totalImages
  updateCarousel()
})