// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const parágrafos = document.querySelectorAll("p");

const totalCaracteres = Array.prototype.reduce.call(
  parágrafos,
  (acumulador, item) => {
    return acumulador + item.innerText.length;
  },
  0
);

console.log(totalCaracteres);
console.log(parágrafos);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? (elemento.innerText = conteudo) : null;

  return elemento;
}

console.log(criarElemento("li", "azul", "Este é o conteudo"));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null, "h1", "titulo");

const 

console.log(h1Titulo("Curso de HTML"));
console.log(h1Titulo("Curso de CSS"));
