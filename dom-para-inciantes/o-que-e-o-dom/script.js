// Retorne o url da página atual utilizando o objeto window
const href = window.location.href;
console.log(href);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
h1Primeiro = document.querySelector(".titulo-principal");

console.log(h1Primeiro);

// Retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log(linguagem);

// Retorne a largura da janela
retornaLargura = window.innerWidth;
console.log("Essa é a largura Atual", retornaLargura);
