//DESTRUCTURING OBJECTS

// const cliente = {
//   nome: "Andre",
//   compras: {
//     digitais: {
//       livros: ["Livro 1", "Livro 2"],
//       videos: ["Video JS", "Video HTML"],
//     },
//     fisicas: {
//       cadernos: ["Caderno 1"],
//     },
//   },
// };

// console.log(cliente.compras.digitais.livros);
// console.log(cliente.compras.digitais.videos);

// const {
//   digitais,
//   fisicas,
//   digitais: { livros, videos },
// } = cliente.compras;

// console.log(digitais);

//NOME DAS VARIÁVEIS
// É necessário indicar o nome da propriedade que você deseja desestruturar de um objeto. É possível mudar o nome da variável final com:

// const cliente = {
//   nome: "Andre",
//   compras: 10,
//   email: "daniel@gmail.com",
// };

// const { nome: nomeAndre, email = "email@gmail.com" } = cliente;

// console.log(nomeAndre);
// console.log(email);

// DESTRUCTURING ARRAYS
// Para desestruturar array's você deve colocar as variáveis entre [] colchetes.

// const frutas = ["Banana", "Uva", "Morango"];

// const [primeira, segunda, terceira] = frutas;

// console.log(segunda);

// const [primeiro, segundo, terceiro] = ["Item 1", "Item 2", "Item 3"];

// console.log(segundo);

// ARGUMENTO DESESTRUTURADO
// Se uma função espera receber como argumento um objeto, podemos desestruturar ele no momento da declaração.

function handleKeyboard({ key, keyCode }) {
  // estou usando {params} para desetruturar
  console.log(key, keyCode);
}

document.addEventListener("keyup", handleKeyboard);
