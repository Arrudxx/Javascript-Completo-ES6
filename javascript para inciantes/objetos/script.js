// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
pessoa = {
  nome: "Daniel",
  sobrenome: "Arruda",
  idade: 19,
  profissao: "futuro programador",
  nomeCompleto() {
    return console.log(this.nome + " " + this.sobrenome);
  },
};
// Crie um método no objeto anterior, que mostre o seu nome completo
console.log(pessoa.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  latir(humano) {
    if (humano === "homem") {
      console.log("au au au au");
    } else {
      console.log("...");
    }
  },
};
