var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick() {
  var lineas = parseInt(texto.value); //AQUI AGARRA EL DATO DE LA CAJA Y LO PASA A NUMERO
  //Version 2#
  var l = 0;
  var xi, xf, yi, yf;
  var n = 300 / lineas;
  for (l = 0; l < lineas; l++) {
    dibujarLinea("#FF0000", 1, l * n, l * n, 300); //red
    dibujarLinea("#00FF00", 300, l * n, 300 - (l * n), 300); //green
    dibujarLinea("#0000FF", l * n, 0, 300, l * n); //blue
    dibujarLinea("#FFFF00", 0, 300 - (l * n), l * n, 0); //yellow
  }
}

dibujarLinea("blue", 1, 1, 1, 300);
dibujarLinea("blue", 1, 300, 300, 300);
dibujarLinea("blue", 300, 300, 300, 1);
dibujarLinea("blue", 1, 1, 300, 1);


/*
// VERSION #2
dibujarLinea("#FF0000",1,l*10,l*10 ,300); //red
dibujarLinea("#00FF00",300,l*10,300 - (l*10),300); //green
dibujarLinea("#0000FF",l*10,0,300,l*10); //blue
dibujarLinea("#FFFF00",0,300-(l*10),l*10,0); //yellow
 // VERSION #1
for (l=0; l < lineas; l++)
{
 yi = 10 * l;
 xf = 10 * (l + 1);
 dibujarLinea("#FF0000",0,xf,xf,300);
console.log("Linea" + l);
}

for (l=0; l < lineas; l++)
{
 xi = 10 * l;
 yf = 300 - (l * 10);
 dibujarLinea("#00FF00",xi,0,0,yf);
console.log("Linea " + l);
}

for (l=0; l < lineas; l++)
{
  yi = 10 * l;
  xf = 300 - (l * 10);
  dibujarLinea("#0000FF",300,yi,xf,300);
console.log("Linea " + l);
}

for (l=0; l < lineas; l++)
{
  xi = 10 * l;
  yf = 10 * (l * 1);
  dibujarLinea("#FFFF00",xi,0,300,yf);
console.log("Linea " + l);
}
*/
