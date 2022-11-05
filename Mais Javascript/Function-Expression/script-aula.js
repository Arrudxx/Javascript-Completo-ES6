//FUNCTION DECLARATION
// function somar(a, b) {
//   return a + b;
// }

//FUNCTION EXPRESSION
// const somar = (a, b) => {
//   return a + b;
// };

// ou

const somar = (a, b) => a + b;
const quadrado = (a) => a * a;

function dividir(a, b) {
  return a / b;
}

console.log(somar(4, 5));
console.log(quadrado(4));

// IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION

// Antes da introdução de modules e da implementação do escopo de bloco, a forma mais comum utilizada para isolarmos o escopo de um código JavaScript era através das chamadas IIFE's.

const instrumento = "Violão";

(function () {
  const instrumento = "Guitarra";
  console.log(instrumento);
})();

console.log(instrumento);
