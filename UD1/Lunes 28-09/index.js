/*let i = 0;
do {
  i += 1;
  document.write(i+"<br>");
} while (i < 5);

var encontrado = false;
while (i<20 && !encontrado){
    if (i==10)
        encontrado=true;
    i++;
    document.write("segundo bucle con i="+i+"<br>");
}*/

/*esto es un array en el for no es necesario especificar el aumento de la variable*/

/*const arr = [3, 5, 7];
for (let i in arr) {
    document.write(arr[i]+"<br>");
    document.write(i+"<br>");
}*/

/*1.- crea	un	script	que	pregunte	tu	nombre,	apellidos	y	tu	edad	y	los	muestre	en	la	página	web	en	
párrafos	distintos.*/
/*var nombre = prompt("Pon tu nombre");
var apellido=prompt("Pon tu Apellido");
var edad=prompt("Pon tu Edad");
const arr = [nombre, apellido, edad];
for (let i of arr ){
    document.write(i+"<br>");
}*/

/*3.- crea	un	script	que	muestre	en	una	ventana	emergente	“hola”	y	tu	nombre	(pidiéndolo	
anteriormente)	utilizando	concatenación	de	cadenas.
Se	concadena	cadenas	utilizando	el	símbolo	“+”.*/


/*4.- crea	un	script	que	pida	al	usuario	su	edad,	nombre,	apellidos	y	ciclo	que	estudia,	y	muestre	esa	
información	en	pantalla	en	una	ventana	emergente.*/