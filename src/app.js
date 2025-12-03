const palos = ["♦", "♥", "♠", "♣"]
const valores = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
const rojas = ["♦", "♥"]

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
    }else{
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

window.onload = function () {

  barajaCarta()





};
