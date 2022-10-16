//loop para cada segundo

function loop(texto) {
  console.log(texto);
}
// setInterval(loop, 300, "300ms");

let i = 0;
const meuLoop = setInterval(() => {
  console.log(i++);
  if (i > 20) {
    clearInterval(meuLoop);
  }
}, 300);
