const href = window.location.href;

if (href === "http://127.0.0.1:5500/dom-para-inciantes/o-que-e-o-dom/") {
  console.log("é igual");
}

const h1Selecionado = document.querySelector("h1");
const h1Classe = h1Selecionado.classList;

function callbackh1(params) {
  console.log("Clicou em", h1Selecionado.innerText);
}

h1Selecionado.addEventListener("click", callbackh1);
