const palos = ["♦", "♥", "♠", "♣"]
const valores = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
const rojas = ["♦", "♥"]
let barajadoAutomatico = false
let numero = document.querySelector(".numero")
let palo = document.querySelectorAll(".palos")

//En esta función se eligen el palo y el numero de manera aleatoria y se insertan los valores en el DOM
function cartaAleatoria() {
  let paloAleatorio = Math.floor(Math.random() * palos.length)
  let numeroAleatorio = Math.floor(Math.random() * valores.length)

  for (let elem of palo) {
    elem.textContent = palos[paloAleatorio]
    if (rojas.includes(palos[paloAleatorio])) {
      elem.classList.add("text-danger")
    } else {
      elem.classList.remove("text-danger")
    }
  }
//Si el numero es un AS, se sustituye el 1 por el palo
  if (!numeroAleatorio == 0) {
    numero.textContent = valores[numeroAleatorio]
    numero.classList.remove("text-danger")
  }
  else {
    numero.textContent = palos[paloAleatorio]
    rojas.includes(palos[paloAleatorio]) ? numero.classList.add("text-danger") : numero.classList.remove("text-danger")
  }
}

//Durante 2 segundos genera cartas aleatorias para dar sensación de aleatoriedad
function barajaCarta() {
  const barajando = setInterval(cartaAleatoria, 2);

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
  numero.style.fontSize = `${30 + selectorAltura.value * selectorAnchura.value / 3}%`;
  for (let elem of palo) {
    elem.style.fontSize = `${50 + selectorAltura.value * selectorAnchura.value / 10}%`;
  }
})

const selectorAnchura = document.querySelector("#anchoCard")
selectorAnchura.addEventListener("input", function () {
  carta.style.width = `${selectorAnchura.value}%`
  numero.style.fontSize = `${30 + selectorAnchura.value * selectorAltura.value / 3}%`;
  for (let elem of palo) {
    elem.style.fontSize = `${50 + selectorAltura.value * selectorAnchura.value / 10}%`;
  }
})

const switchBarajadoAuto = document.querySelector("#barajadoAuto")
switchBarajadoAuto.addEventListener("change", function () {
  if (switchBarajadoAuto.checked == true) {
    const autoBarajador = setInterval(barajaCarta, 10000);
  } else {
    clearInterval(autoBarajador)
  }
})

window.onload = function () {
  barajaCarta()
};
