// Crie uma função para verificar se um valor é Truthy
var numero = 2;

function verificaTruthy(numero) {
  if (!!numero == true) {
    return console.log("É verdadeiro");
  } else {
    console.log("É falso");
  }
}
verificaTruthy(0);

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado) {
  var totalperimetro = lado + lado;
  return console.log(totalperimetro);
}

perimetro(42);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return console.log(`Meu nome Completo é ${nome + " " + sobrenome}`);
}

nomeCompleto("Daniel", "Arruda");

// Crie uma função que verifica se um número é par
function verificaPar(numero) {
  if (numero % 2 == 0) {
    return console.log("É par");
  } else {
    return console.log("É impar");
  }
}
verificaPar(4588);

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(dado) {
  return typeof dado;
}
console.log(tipoDado(function () {}));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
addEventListener("click", function () {
  console.log("Daniel Arruda");
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
