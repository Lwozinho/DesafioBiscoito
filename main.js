const biscoito1 = document.querySelector(".biscoito1")
const biscoito2 = document.querySelector(".biscoito2")
const open = document.querySelector("#open")
const button = document.querySelector("#btnReset")

open.addEventListener('click', onClick)
btnReset.addEventListener('click', onClick);

function onClick(){
  toggleScreen()
}

function toggleScreen() {
biscoito1.classList.toggle("hide")
biscoito2.classList.toggle("hide")
}

