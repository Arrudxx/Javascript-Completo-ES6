// const promesa = new Promise((resolve, reject) => {
//   let condicao = true;
//   if (condicao) {
//     setTimeout(() => {
//       resolve({ nome: "Andre", idade: 28 });
//     }, 1000);
//   } else {
//     reject(Error("Um erro ocorreu na promise"));
//   }
// });

// const retorno = promesa
//   .then((resolucao) => {
//     console.log(resolucao);
//     resolucao.profissao = "Designer";
//     return resolucao;
//   })
//   .then(
//     (resolucao) => {
//       console.log(resolucao);
//     },
//     (rejeitada) => {
//       console.log(rejeitada);
//     }
//   )
//   .finally((teste) => {
//     console.log(teste);
//   });

// console.log(retorno);

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Usuario Logado");
  }, 1000);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados Carregados");
  }, 1500);
});

const carregouTudo = Promise.race([login, dados]); // testar com all tbm

carregouTudo.then((resolucao) => {
  console.log(resolucao);
});