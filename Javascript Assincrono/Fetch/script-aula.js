//TEXT

// const doc = fetch("./doc.txt");

// doc
//   .then((resolucao) => {
//     return resolucao.text();
//   })
//   .then((body) => {
//     const conteudo = document.querySelector(".conteudo");
//     conteudo.innerText = body;
//   });

//CSS

// const cep = fetch("./style.css");

// cep
//   .then((resolucao) => {
//     return resolucao.text();
//   })
//   .then((body) => {
//     console.log(body.logradouro);
//     const conteudo = document.querySelector(".conteudo");
//     const style = document.createElement("style");
//     style.innerHTML = body;
//     console.log(style);
//     conteudo.appendChild(style);
//   });

//HTML

// const sobre = fetch("./sobre.html");

// const div = document.createElement("div");

// sobre
//   .then((resolucao) => {
//     return resolucao.text();
//   })
//   .then((body) => {
//     div.innerHTML = body;
//     const titulo = div.querySelector("h1");
//     document.querySelector("h1").innerText = titulo.innerText;
//     console.log(titulo);
//   });

// BLOB

// const imagem = fetch("./imagem.png");

// imagem
//   .then((resolucao) => {
//     return resolucao.blob();
//   })
//   .then((body) => {
//     const blobUrl = URL.createObjectURL(body);
//     const imagemDom = document.querySelector("img");
//     imagemDom.src = blobUrl;
//   });

//CLONE

// const imagem = fetch("https://viacep.com.br/ws/01001000/json/");

// imagem.then((r) => {
//   const r2 = r.clone();
//   r.text().then((text) => {
//     console.log(text);
//   });
//   r2.json().then((json) => {
//     console.log(json);
//   });
// });

//HEADERS

// const imagem = fetch("https://viacep.com.br/ws/01001000/json/");

// imagem.then((response) => {
//   console.log(response);
//   response.headers.forEach(console.log);
// });

//STATUS

const imagem = fetch(".docs.txt");

imagem.then((response) => {
  console.log(response.status);
  if (response.status === 404) {
    console.log("Pagina não existe");
  }
});
