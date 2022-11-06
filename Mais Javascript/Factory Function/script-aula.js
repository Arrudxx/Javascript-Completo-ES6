// function createButton(text) {
//   const numeroSecreto = "486sa4da8s6f";

//   function element() {
//     const buttonElement = document.createElement("button");
//     buttonElement.innerText = text;
//     return buttonElement;
//   }

//   return Object.freeze({
//     text: text,
//     element: element,
//   });
// }

// const btnComprar = createButton("Comprar");
// const btnVender = createButton("Vender");

// console.log(btnComprar, btnVender);

// ICE FACTORY
// Podemos impedir que os métodos e propriedades sejam modificados com Object.freeze(). Ideia inicial de Douglas Crockford.

// return Object.freeze({
//   text: text,
//   element: element,
// });

// function Pessoa(nome) {
//   if (!(this instanceof Pessoa)) return new Pessoa(nome);
//   console.log(this);
//   this.nome = nome;
// }

// Pessoa.prototype.andar = function () {
//   return `${this.nome} andou`;
// };

// const designer = Pessoa("André");

// console.log(designer);
