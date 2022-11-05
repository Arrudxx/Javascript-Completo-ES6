// Remova o erro
const priceNumber = (n) => +n.replace("R$", "").replace(",", ".");
console.log(priceNumber("R$ 99,99"));

// Crie uma IIFE e isole o escopo
// de qualquer código JS.

const fruta = "mamão";

(function isolaEscopo() {
  const fruta = "banana";
  console.log(fruta);
})();

console.log(fruta);

// Como podemos utilizar
// a função abaixo.
const active = (callback) => callback();

active(function () {
  console.log("Teste");
});
