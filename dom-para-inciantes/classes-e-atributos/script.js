// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll(".menu a");
console.log(menu);

menu.forEach((item) => {
  item.classList.add("ativo");
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item) => {
  item.classList.remove("ativo");
});

menu[0].classList.add("ativo");

// Verifique se as imagens possuem o atributo alt

const verificaAlt = document.querySelectorAll("img");
console.log(verificaAlt);

verificaAlt.forEach((item) => {
  console.log(item.hasAttribute("alt"));
});

// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute("href", "https://www.google.com");
