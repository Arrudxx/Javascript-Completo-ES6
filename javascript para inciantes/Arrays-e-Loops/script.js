// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
brasilGanhou = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (let i = 0; i < brasilGanhou.length; i++) {
  const copaBrGanhou = brasilGanhou[i];
  console.log(`O brasil ganhou a copa de ${copaBrGanhou}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];
for (let i = 0; i < frutas.length; i++) {
  const fruta = frutas[i];
  console.log(fruta);
  if (fruta === "Pera") {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var achaQuantidadeArray = frutas.length - 1;
var ultimoArray = frutas[achaQuantidadeArray];
console.log(ultimoArray);
