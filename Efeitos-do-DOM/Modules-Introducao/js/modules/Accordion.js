import * as teste from "./teste.js";

console.log(teste.senha);

export default function initAccordion() {
  const accordionList = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  );
  const activeClasse = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClasse);
    accordionList[0].nextElementSibling.classList.add(activeClasse);

    function activeAccordion() {
      this.classList.toggle(activeClasse);
      this.nextElementSibling.classList.toggle(activeClasse);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
