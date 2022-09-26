// nomeie 3 propriedades ou métodos de strings
var nome = "Daniel";
// fixed;
// length;
// indexOf;

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector(".btn");
// addEventListener
// appendChild
// toggleAttribute
//id
//innerhtml

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

var btn = document.querySelector("#copy");

btn.addEventListener("click", function () {
  var textArea = document.querySelector(".text");
  textArea.select();
  document.execCommand("copy");
});
