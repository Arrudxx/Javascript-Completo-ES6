// const comida = "Pizza";
// const agua = new String("Água");

// console.log(agua.length);

// const frase = "A melhor comida";
// console.log(frase[frase.length - 1]);
// console.log(frase.charAt(frase.length));

const frase = "A melhor linguagem é ";
const linguagem = "JavaScript";

const fraseFinal = frase.concat(linguagem, "!@");

const fruta = "Banana";
const listaFrutas = "Melancia, Banana, Laranja";

// console.log(fruta.includes(fruta, 0));

// console.log(fruta.endsWith("na"));
// console.log(fruta);

const transacao1 = "Depósito de cliente";
const transacao2 = "Depósito de fornecedor";
const transacao3 = "Taxa de camisas";

console.log(transacao1.slice(0, 3));

console.log(fruta.indexOf("n"));
console.log(fruta.lastIndexOf("na"));

const listaPrecos = ["R$ 99", "R$ 199", "R$ 12000"];

listaPrecos.forEach((item) => {
  console.log(item.padStart(10, "-"));
});

const frase2 = "Ta";

frase2.repeat(5); // TaTaTaTaTa

let listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
listaItens = listaItens.replace(/[ ]+/g, ", ");

const arrayLista = listaItens.split(", ");

console.log(arrayLista);

const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div");
const novoHtml = htmlArray.join("section");

console.log(htmlText);
console.log(htmlArray);
console.log(novoHtml);

const frutaArray = ["banana", "melancia", "laranja"];

const sexo1 = "Feminino";
const sexo2 = "feminino";
const sexo3 = "FEMININO";

console.log(sexo1.toUpperCase() === "FEMININO");

const valor = "  R$ 23.00   ";
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'
