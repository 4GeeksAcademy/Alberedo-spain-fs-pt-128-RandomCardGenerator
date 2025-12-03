const palos = ["♦", "♥", "♠", "♣"]
const valores = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
const rojas = ["♦", "♥"]
let barajadoAutomatico = false

function cartaAleatoria() {
  let paloAleatorio = Math.floor(Math.random() * palos.length)
  let numeroAleatorio = Math.floor(Math.random() * valores.length)

  let numero = document.querySelector(".numero")
  numero.textContent = valores[numeroAleatorio]

  let palo = document.querySelectorAll(".palos")
  for (let elem of palo) {
    elem.textContent = palos[paloAleatorio]
    if (rojas.includes(palos[paloAleatorio])) {
      elem.classList.add("text-danger")
    } else {
      elem.classList.remove("text-danger")
    }
  }
}

function barajaCarta() {
  const barajando = setInterval(cartaAleatoria, 50);

  setTimeout(() => {
    clearInterval(barajando);
  }, 2000);
}

const carta = document.querySelector(".card")
carta.addEventListener("click", function () {
  barajaCarta()
})

const selectorAltura = document.querySelector("#alturaCard")
selectorAltura.addEventListener("input", function () {
  carta.style.height = `${selectorAltura.value}px`
})

const selectorAnchura = document.querySelector("#anchoCard")
selectorAnchura.addEventListener("input", function () {
  carta.style.width = `${selectorAnchura.value}px`
})

const switchBarajadoAuto = document.querySelector("#barajadoAuto")
switchBarajadoAuto.addEventListener("change", function(){
if(switchBarajadoAuto.checked ==true){
  const autoBarajador = setInterval(barajaCarta, 10000);
}else{
  clearInterval(autoBarajador)
}
  
})

window.onload = function () {

  barajaCarta()





};
