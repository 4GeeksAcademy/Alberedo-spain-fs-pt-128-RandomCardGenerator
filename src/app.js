const palos = ["♦", "♥", "♠", "♣"]
const valores = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
const rojas = ["♦", "♥"]
let barajadoAutomatico = false
let numero = document.querySelector(".numero")
let palo = document.querySelectorAll(".palos")

function cartaAleatoria() {
  let paloAleatorio = Math.floor(Math.random() * palos.length)
  let numeroAleatorio = Math.floor(Math.random() * valores.length)

  numero.textContent = valores[numeroAleatorio]
  
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
  carta.style.height = `${selectorAltura.value}%`
  numero.style.fontSize = `${30+selectorAltura.value*selectorAnchura.value/3}%`;
  for (let elem of palo) {
  elem.style.fontSize = `${50+selectorAltura.value*selectorAnchura.value/10}%`;
  }
})

const selectorAnchura = document.querySelector("#anchoCard")
selectorAnchura.addEventListener("input", function () {
  carta.style.width = `${selectorAnchura.value}%`
  numero.style.fontSize = `${30+selectorAnchura.value*selectorAltura.value/3}%`;
  for (let elem of palo) {
  elem.style.fontSize = `${50+selectorAltura.value*selectorAnchura.value/10}%`;
  }
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
