
let elements = document.querySelectorAll(".flow");

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function() {
    if ((document.querySelector('.active'))) {
      document.querySelector('.active').classList.remove('active')
    }
    this.classList.add('active')
  })
}

//BOTON DE ENVIAR
let enviar = document.getElementById('enviar');

function ocultar() {
  let container = document.getElementById('container');
  container.classList.add('none');
}

function mostrar() {
  let container2 = document.getElementById('container2');
  container2.classList.remove('none');
  container2.classList.add('block');
}

function enviarFeed() {
  ocultar();
  mostrar();
  console.log('hiciste click en enviar');
}

enviar.addEventListener("click", enviarFeed);


//  onclick="document.getElementById('container').style.display='none'"
// onclick="document.getElementById('container2').style.display='block'"
//onclick="document.getElementById('container').style.display='none'"