// const carros = ["Ford", "Fiat", "Honda"];

// carros.forEach((item, index, array) => {
//   array[index] = "teste";
//   console.log(item.toUpperCase(), index, array);
// });

// console.log(carros);

// const li = document.querySelectorAll("li");

// const retornoForeach = li.forEach((item, index) => {
//   item.classList.add("ativa" + index);
// });

// console.log(retornoForeach);

// const carros = ["Ford", "Fiat", "Honda"];

// const novaArray = carros.map((item, index, array) => {
//   return item.toUpperCase();
// });

// const numeros = [2, 4, 5, 6, 78];
// const numerosX2 = numeros.map((n) => n * 2);
// console.log(numerosX2);

// console.log(novaArray);
// console.log(carros);

// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const tempoAulas = aulas.map((aula) => aula.min);

// const nomeAulas = (aula) => aula.nome;

// const arrayNomeAulas = aulas.map(nomeAulas);

// console.log(arrayNomeAulas);
// console.log(tempoAulas);

// const aulas = [10, 25, 30];

// const reduceAulas = aulas.reduce((acumulador, item) => {
//   console.log(acumulador, item  );
//   return acumulador + item;
// }, 0);

// console.log(reduceAulas);

// const numeros = [10, 25, 30, 3, 54];

// const maiorNumero = numeros.reduce((anterior, atual) => {
//   if (anterior > atual) {
//     return anterior;
//   } else {
//     return atual;
//   }
// }, 0);

// console.log(maiorNumero);

// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const listaAulas = aulas.reduce((acumulador, aula, index) => {
//   acumulador[index] = aula.nome;
//   return acumulador;
// }, {});

// const frutas = ["Banana", "Pêra", "Uvas"];

// const indexUva = frutas.find((item) => {
//   // ou findIntex para retornar o index
//   return item === "Uvas";
// });

// console.log("Index: ", indexUva);

// const temUva = frutas.some((item) => {
//   console.log(item);
//   return item === "Uva";
// });

// const every = frutas.every((item) => {
//   console.log(item);
//   return item === "Banana";
// });

// console.log(every);

// const numeros = [6, 43, 22, 88, 101, 29];

// const maiorQue3 = numeros.every((n) => n > 3);

// console.log(maiorQue3);

const frutas = ["Banana", undefined, null, "", "Uva", 0, "Maçã"];

const arrayFrutas = frutas.filter((item) => {
  console.log(item);
  return item;
});

console.log(arrayFrutas);

const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const maiore15 = aulas.filter((aula) => {
  console.log(aula.min);
  return aula.min > 15;
});

console.log(maiore15);
