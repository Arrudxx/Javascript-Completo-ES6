console.log(Number.isNaN("da"));
console.log(Number.isInteger(10.44));

console.log(parseFloat("324.5"));
console.log(parseFloat("100 reais"));
console.log(parseInt("100.27 reais"));
console.log(parseInt(23.49, 10));

const preco = 10.5648;
console.log(preco.toFixed());

let valor = 48.49;
valor = valor.toLocaleString("en-US", { style: "currency", currency: "USD" });

console.log(valor);

console.log(Math.PI);
console.log(Math.abs(-5)); // transforma negativo em positivo

console.log(Math.round(4.5)); // arredonda normal
console.log(Math.ceil(4.2)); // arrendonda forçando pra cima
console.log(Math.floor(4.2)); // arrendonda forçando pra baixo

console.log(Math.max(2, 4, 6, 45, 16)); // retorna o maior numero
console.log(Math.min(2, 4, 6, 45, 16)); // retorna o menor numero

// const aleatorio = Math.floor(Math.random() * 10);
const aleatorio = Math.floor(Math.random() * (40 - 20 + 1)) + 20;

console.log(aleatorio);
