let aparece = document.querySelectorAll('.aparece');
//console.log(aparece);
let imagen = document.querySelectorAll('.entrada__imagen');
//console.log(imagen);
let flecha = document.querySelector('#arrowAnim');
//console.log(flecha);

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    let alturaAnimado;
  for (var i=0; i < aparece.length; i++) {
    alturaAnimado = aparece[i].offsetTop;
    if (alturaAnimado - 700 < scrollTop) {
      aparece[i].style.opacity = 1;
      aparece[i].classList.add('mostrarArriba');
     
      //console.log(imagen[i]);
    }
    
  }

  if (alturaAnimado - 700 < scrollTop) {
    flecha.remove();
    // console.log(flecha);
    // console.log('eliminado');
  }
}

window.addEventListener('scroll', mostrarScroll);