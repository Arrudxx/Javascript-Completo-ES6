// var ultimoItem = videoGames.pop();

for (var numero = 1; numero <= 4; numero++) {
  console.log(numero);
}

var i = 0;
while (i < 10) {
  console.log(i);
  i = i + 5;
}

var videoGames = ["Switch", "Ps4", "Xbox", "3DS"];

for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if (videoGames[item] === "Ps4") {
    break;
  }
}

var frutas = ["Banana", "Pera", "Maçã", "Abacaxi", "Uva"];

frutas.forEach(function (fruta, index) {
  frutas.pop();
  console.log(fruta, index, frutas);
});
