let aparece = document.querySelectorAll('.aparece');
console.log(aparece);
let imagen = document.querySelectorAll('.entrada__imagen');
console.log(imagen);


function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    
  for (var i=0; i < aparece.length; i++) {
    let alturaAnimado = aparece[i].offsetTop;
    if (alturaAnimado - 700 < scrollTop) {
      aparece[i].style.opacity = 1;
     
      
      console.log(imagen[i]);
      
    }
  }
}

window.addEventListener('scroll', mostrarScroll);