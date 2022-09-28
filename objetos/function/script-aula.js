// const perimetro = new Function("lado", "return lado * 4");

// function somar(n1, n2, n4) {
//   return n1 + n2;
// }

// console.log(somar.length);
// console.log(somar.name);

// function DarOi(nome, idade) {
//   console.log("Oi para você " + nome + idade);
// }

// DarOi.call({}, "Daniel ", 28);

// window.marca = "Carro";
// window.ano = 288;

// function descricaoCarro(velocidade) {
//   console.log(this);
//   console.log(this.marca + " " + this.ano + velocidade);
// }

// descricaoCarro.call({ marca: "Honda", ano: 2015 }, 100);

// const carros = ["Ford", "Fiat", "VW"];

// const frutas = ["banana", "uva", "pera"];

// carros.forEach.call(frutas, (item) => {
//   console.log(item);
// });

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function (classe) {
//   console.log(this);
//   this.element.classList.add(classe);
// };

// const ul = new Dom("ul");

// // ul.ativo.call(null, "ativo");
// ul.ativo.call(null, "ativar");

// const frutas = ["Uva", "Maçã", "Banana"];

// Array.prototype.pop.call(frutas);
// frutas.pop; // mesma coisa que isso

// const arrayLike = {
//   0: "item 1",
//   1: "item 2",
//   2: "item 3",
//   length: 3,
// };

// const li = document.querySelectorAll("li");
// const arrayLi = Array.from(li);

// const filtro = arrayLi.filter((item) => {
//   return item.classList.contains("ativo");
// });

// console.log(filtro);

// console.log(li);

// const numeros = [3, 4, 6, 1, 34, 44, 32];

// const li = document.querySelectorAll("li");

// function itemPossuiAtivo(item) {
//   return item.classList.contains("ativo");
// }

const carro = {
  marca: "Ford",
  ano: 2018,
  acelerar: function (aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  },
};

const honda = {
  marca: "Honda",
};

const acelerarHonda = carro.acelerar.bind(honda, 100);

console.log(acelerarHonda("2min"));

console.log(carro);
