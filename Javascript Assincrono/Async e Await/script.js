//BASICO

// async function puxarDados() {
//   try {
//     const responseDados = await fetch("./dados.json");
//     const jsonDados = await responseDados.json();

//     document.body.innerText = jsonDados.aula;
//   } catch (erro) {
//     console.log("deu erro");
//   }
// }

// puxarDados();

//INICIAR FETCH AO MESMO TEMPO

async function puxarDados() {
  const responseDados = fetch("./dados.json");
  const responseClientes = fetch("./clientes.json");

  const jsonDados = await (await responseDados).json();
  const jsonClientes = await (await responseClientes).json();

  console.log(jsonDados);
  console.log(jsonClientes);
}

puxarDados();

// AWAIT SEMPRE VAI ESPERAR UMA PROMISE (SÓ FUNCIONA ESPERANDO UM PROMISE)

async function asyncSemPromise() {
  // Console não irá esperar.
  await setTimeout(() => console.log("Depois de 1s"), 1000);
  console.log("acabou");
}
asyncSemPromise();

async function asyncComPromise() {
  // Console não irá esperar.
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("Depois de 1s");
      resolve();
    }, 1000);
  });
  console.log("acabou");
}
asyncSemPromise();
