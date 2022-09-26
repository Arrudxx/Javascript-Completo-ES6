function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

function initAccordion() {
  if (accordionList.length) {
    const accordionList = document.querySelectorAll(".js-accordion dt");
    const activeClasse = "ativo";

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
