// Obtener el botón del menú y el menú móvil
const menuButton = document.querySelector('.menuButton');
const navBottom = document.querySelector('.navBottom');

// Agregar un evento de clic al botón del menú
menuButton.addEventListener('click', () => {
  // Alternar la clase 'activo' en el menú móvil para mostrar/ocultar el menú
  navBottom.classList.toggle('activo');
});


let slideralarmas = document.querySelector(".slideralarmas");

let images = slideralarmas.querySelectorAll(".img_alarmas");

let index = 1;

setInterval(function() {
  let porcentage = index * -100;
  slideralarmas.style.transform = "translateX(" + porcentage + "%)";
  index++;
  if (index > (images.length - 1) ) {
    index = 0;
  }
  
  
}, 3000);

