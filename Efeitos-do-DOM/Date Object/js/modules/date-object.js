export default function initDataObject() {}

// const agora = new Date();
// const futuro = new Date("Dec 24 2023 23:59");

// console.log(agora.getMonth());

// console.log(futuro);

// function transformarDias(tempo) {
//   return tempo / (24 * 60 * 60 * 1000);
// }

// const diasAgora = transformarDias(agora.getTime());
// const diasFuturo = transformarDias(futuro.getTime());

// console.log(diasFuturo - diasAgora);

const funcionamento = document.querySelector("[data-semana]");
const diasSemana = funcionamento.dataset.semana.split(",").map(Number); //transforma string em array dps usa o map para transformar em numeros
const horarioSemana = funcionamento.dataset.horario.split(",").map(Number); //transforma string em array dps usa o map para transformar em numeros

const dataAgora = new Date();
const diaAgora = dataAgora.getDay();
const horarioAgora = dataAgora.getHours();

const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;

const horarioAberto =
  horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

if (semanaAberto && horarioAberto) {
  funcionamento.classList.add("aberto");
}

console.log(horarioAberto);
