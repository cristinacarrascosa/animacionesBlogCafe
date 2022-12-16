let aparece = document.querySelectorAll('.aparece');
//console.log(aparece);
let imagen = document.querySelectorAll('.entrada__imagen');
//console.log(imagen);
let flecha = document.querySelectorAll('.arrowSliding');
console.log(flecha);

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    
  for (var i=0; i < aparece.length; i++) {
    let alturaAnimado = aparece[i].offsetTop;
    if (alturaAnimado - 700 < scrollTop) {
      aparece[i].style.opacity = 1;
      aparece[i].classList.add('mostrarArriba');
     
      
      //console.log(imagen[i]);
      
    }
  }
}

window.addEventListener('scroll', mostrarScroll);