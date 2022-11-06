//REST

// function perimetroForma(lado, totalLados, ...listaArgumentos) {
//   console.log(listaArgumentos);
//   console.log(arguments);
//   return lado * totalLados;
// }

// console.log(perimetroForma(10, 20, 30, "oi", "teste"));

//SPREAD

// const frutas = ["banana", "uva", "morango"];
// const legumes = ["cenoura", "batata"];

// const comidas = [...frutas, "Pizza", ...legumes];

// console.log(comidas);

////////////////////////////////////////////////////////////

// function anunciarGanhadores(premio, ...ganhadores) {
//   ganhadores.forEach((ganhador) => {
//     console.log(ganhador + " ganhou um " + premio);
//   });
// }

// const ganhadores = ["Pedro", "Marta", "Beto"];

// anunciarGanhadores("carro", ...ganhadores);

// const todosOsNumeros = [2, 5, 48, 54, 48, 6, 52, 7];
// const numeroMaximo = Math.max(...todosOsNumeros);

// console.log(numeroMaximo);

// TRANSFORMAR EM ARRAY
// É possível transformar itens iteráveis em uma array real com o spread.

const btns = document.querySelectorAll("button");

console.log(btns);

const btnsArray = [...btns];
