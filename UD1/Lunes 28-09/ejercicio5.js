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
/*var nombre =prompt("tu nombre");
alert("HOLA "+nombre);*/

/*4.- crea	un	script	que	pida	al	usuario	su	edad,	nombre,	apellidos	y	ciclo	que	estudia,	y	muestre	esa	
información	en	pantalla	en	una	ventana	emergente.*/

/*var nombre = prompt("Pon tu nombre");
var apellido = prompt("Pon tu Apellido");
var edad = prompt("Pon tu Edad");
var ciclo = prompt("Pon tu Ciclo");

alert(nombre+" "+apellido+" "+edad+" "+ciclo+" ");*/

/*1.- crea	un	script	que	determine	si	un	número	introducido	por	el	usuario	es	par.*/

/*var n =prompt("introduce un numero");
if (n%2==0){
    document.write("es par");
}else{
    document.write("es impar");
}*/

/*2.- crea	un	script	que	reciba	la	edad	de	un	usuario	y	determine	si	es	mayor	de	edad.*/

/*var n =prompt("introduce na edad");
if (n<18){
    document.write("es menor de edad");
}else{
    document.write("es mayor de edad");
}*/

/*3.- crea	un	script	que	reciba	la	edad	de	un	usuario,	y	su	localidad	de	nacimiento	y	muestre	en	pantalla	
“Enhorabuena”	a	los	usuarios	de	más	de	25	años	de	Madrid.*/

/*var edad = prompt("Pon tu edad");
var loc = prompt("Pon tu Localidad");
if (edad>=25 && loc==="madrid"){
    document.write("Enhorabuena”	a	los	usuarios	de	más	de	25	años	de	Madrid.");
}else{
    document.write("HOLA");
}*/


/*4.- crea	un	script	que	pida	un	número	al	usuario,	y	si	ese	número	es	superior	a	100	le	aplique	un	
descuento	del	15%,	mostrando	el	nuevo	número	en	pantalla.*/

/*var n =prompt("introduce un numero");
if (n>100){
    n=n-0.85
}else{
    document.write("NO HAY DESCUENTO");
}*/

/*5.- crea	un	script	que	pregunte	al	usuario	por	su	nombre,	y	conteste	“Bienvenido”	o	“Bienvenida”	según	
si	el	nombre	introducido	es	de	hombre	o	de	mujer	(nota:	realízalo	sólo	para	los	nombres:	Pablo,	Ana,	
Eduardo	y	Clara).*/

/*var nom = prompt("Pon tu nombre");
if (nom==="Pablo"||nom==="Eduardo"){
    document.write("BIENVENIDO");
}else if (nom==="Ana"||nom==="Clara"){
    document.write("BIENVENIDA");
}*/

/*6.- crea	un	script	que	pida	a	un	usuario	dónde	vive;	si	vive	en	Madrid	y	tiene	entre	18	y	30 años,	el	script	
debe	mostrar	en	pantalla	que	el	usuario	puede	acceder	al	carnet	de	empresarios	emprendedores.*/

/*var loc = prompt("Pon tu localidad");
var edad=prompt("Pon tu edad")
if (loc==="Madrid" && edad >=18 && edad <=30){
    document.write("el	usuario	puede	acceder	al	carnet	de	empresarios	emprendedores");
}else if (nom==="Ana"||nom==="Clara"){
    document.write("Usuario no identificado");
}*/



/*o	IF	/	ELSE
1.- crea	un	script	que	pida	al	usuario	su	nombre	y	apellidos.	Si	el	nombre	es	“Ricardo”,	debe	mostrar	en	
pantalla	los	apellidos;	si	el	nombre	no	es	“Ricardo”,	debe	escribir	en	el	documento	HTML	los	apellidos.*/

/*var nom = prompt("Pon tu nombre");
var ap = prompt("Pon tu apellido");
if (nom==="Ricardo"){
    document.write(ap);
}else{
    alert(ap);
}*/

/*2.- crea	un	script	que	reciba	la	edad	de	un	usuario	y	determine	si	puede	jubilarse	o	no	(la	jubilación	se	
alcanza	con	67 años).*/

/*var n = prompt("Pon tu edad");
if (n<67){
    document.write("NO puedes Jubilarte");
}else{
    document.write("Puedes Jubilarte");
}*/

/*3.- Crea	un	script	que	pregunte	la	edad,	y	determine	si	debes	estar	en	el	jardín	de	infancia	(menores	de	
5	años),	en	primaria	(entre	6	y	11),	en	la	ESO	(entre	12	y	16),	en	Bachillerato	o	Ciclos	(entre	17	y	21)	o	en	
la	Universidad	(más	de	21).*/

var n = parseInt(prompt("Pon tu edad"));
if (n<6){
    document.write("JARDIN DE INFANCIA");
} 
if(n>7 && n<12){
    document.write("PRIMARIA");
} 
if(n>13 && n<17){
    document.write("ESO");
}
if(n>18 && n<21){
    document.write("CICLO");
}
if(n>22){
    document.write("UNIVERSIDAD");
}

/*4.- Crea	un	script	que	pregunte	al	usuario	el	número	de	hermanos	que	tiene	y	una	cantidad.	En	el	caso	
de	que	el	usuario	tenga	más	de	tres	hermanos,	se	mostrará	la	cantidad	con	un	15%	de	descuento.	Si	el	
usuario	tiene	menos	de	tres	hermanos,	se	mostrará	la	cantidad	con	un	5%	de	descuento.	Si	no	tiene	
hermanos	se	mostrará	la	cantidad	sin	descuento.*/

/*var n = prompt("Numero de hermanos");
var n2=prompt("Pon cantidad");
if (n>=3){
    n2=n2*0.85;
    document.write(n2);
}else if(n>0 && n<3){
    n2=n2*0.95;
    document.write(n2);
}else{
    document.write(n2+"NO HAY DESCUENTO");
}*/

/*5.- Crea	un	script	que	recoja	la	nota	de	dos	exámenes	y	dos	trabajos	y	determine	si	la	media	es	superior	
a	5	para	aprobar	la	asignatura	(75%	exámenes	y	25%	trabajos)	y	4.5	en	todos	ellos.
o	SWITCH*/

/*var ex=prompt("pon la nota de examen");
var ex2=prompt("pon la nota de examen");
var med=(ex+ex2)/2;

var tr=prompt("pon la nota de trabajo");
var tr2=prompt("pon la nota de trabajo");
med2=(tr+tr2)/2;

if (med==7,5 && med2==2,5 && ex>=4,5 && ex2>=4,5 && tr>=4,5 && tr2>=4,5){
    document.write("Has aprovado la asignatura");
}else{
    document.write("No has aprovado la asignatura");
}*/

/*1.- Crea	un	script	que	pregunte	al	usuario	por	el	nombre	de	un	mes,	y	muestre	el	número	de	días	que	
tiene	el	mes.*/

/*var mes=prompt("pon un mes");
switch(mes){
    case "enero": document.write("31");break;
    case "febrero":document.write("29");break;
    case "marzo": document.write("31");break;
    case "abril": document.write("30");break;
    case "mayo": document.write("31");break;
    case "junio": document.write("30");break;
    case "julio": document.write("31");break;
    case "agosto": document.write("31");break;
    case "septiembre": document.write("30");break;
    case "octubre": document.write("31");break;
    case "noviembre": document.write("30");break;
    case "diciembre": document.write("31");break;
    default:JOptionPane.showMessageDialog(null, "Incorrecto");     
}*/

/*2.- Crea	un	script	que	pregunte	al	usuario	por	un	número,	y	determine	si	es	par,	si	es	múltiplo	de	tres,	y	
si	es	múltiplo	de	5.*/

/*var n=prompt("pon un numero");
switch(n){
    case n % 2==0:document.write("es Par");break;
    case n % 2!=0:document.write("es Impar");break;

}*/

/*3.- Crea	un	script	que	pida	al	usuario	dos	números	y	una	operación	(que	puede	ser	el	carácter	+,	-,	*	o	/).	
El	script	debe	devolver	el	resultado	de	la	operación	seleccionada	por	el	usuario.
Bucles*/

/*var n1=parseInt(prompt("pon un numero"));
var n2=parseInt(prompt("pon un numero"));
var op=prompt("elige una operacion matematica");
switch(op){
    case "+" : document.write(n1+n2);break;
    case "-" : document.write(n1-n2);break;
    case "*" : document.write(n1*n2);break;
    case "/" : document.write(n1/n2);break;
    default: document.write("No es correcto");
}*/


/*1.- Crea	un	script	que	muestre	en	la	página	web	todos	los	números	desde	el	uno	hasta	el	10,	cada	uno	
de	ellos	separado	por	una	línea	(<hr>)*/

/*var i=0;
do {
    i += 1;
    document.write(i+"<br>");
  } while (i < 10);*/

/*2.- Crea	un	script	que	pida	al	usuario	un	número,	e	imprima	en	el	documento	HTML	todos	los	números	
desde	el	número	introducido	por	el	usuario	hasta	el	100.*/

/*var n=parseInt(prompt("pon un numero"));
for (let i=n;i<=100;i++){
    document.write(i+"<br>");
}*/

/*3.- Crea	un	script	que	pregunte	constantemente	números	al	usuario	hasta	que	el	usuario	introduzca	el	
número	0.*/

/*var n1=parseInt(prompt("pon un numero"));
do {
    n1=parseInt(prompt("pon un numero"));
} while (n1 != 0);*/


/*4.- Crea	que	un	script	que	imprima	en	el	documento	HTML	todas	las	palabras	introducidas	por	el	usuario.	
El	script	debe	terminar	cuando	el	usuario	introduzca	la	palabra	“SALIR”.*/

/*var p=prompt("Introduce palabras");
do {
    p=prompt("Introduce palabras");
    document.write(p+"<br>");
} while (p != "salir");*/


/*5.- Crea	un	script	que	pida	al	usuario	10	números,	y	muestre	su	suma	en	pantalla.*/

/*var n1;
var suma=0;
for (let i=0;i<=10;i++){
    n1=parseInt(prompt("pon un numero"));
    suma=suma + n1;
}
document.write(suma);*/