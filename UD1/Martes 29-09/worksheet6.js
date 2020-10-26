/*Escribir un programa que muestre la frase “Cabecera h” seguido del número.
Las frases deben estar formateadas con las etiquetas adecuadas. El
resultado debe ser el siguiente: */
/*for (let i=1; i<7;i++){
    document.write("<h"+i+"> Cabecera h"+i+"</h"+i+"> <br>");
}*/


/*Hacer un programa que pida por teclado tres valores: el número de columnas
de una tabla y, la altura y anchura (en pixels) de sus celdas. Una vez
tecleados estos valores, el programa pintará en la página web una tabla
HTML de una fila por el nº de columnas tecleadas. */

var n1=parseInt(prompt("Introduce las columnas: "));
var n2=parseInt(prompt("Introduce la altura: "));
var n3=parseInt(prompt("Introduce la anchura: "));

document.write("<table border='0' cellspading='2' bgcolor='black' width='200'>")
document.write("<tr bgcolor='white' height="+n2+">");
for (let i=1;i<5;i++)
    document.write("<td width="+n3+">&nbsp;</td>");
    
document.write("</tr>");
document.write("</table>");

/*Modifica el ejercicio anterior para que las columnas impares tengan un
fondo negro y las pares fondo blanco.*/
/*var n1=parseInt(prompt("Introduce las columnas: "));
var n2=parseInt(prompt("Introduce la altura: "));
var n3=parseInt(prompt("Introduce la anchura: "));

document.write("<table border='0' cellspading='2' bgcolor='black' width='200'>")
document.write("<tr height="+n2+">");
for (let i=1;i<n1;i++)
    if(i%2==0)
        document.write("<td bgcolor='white' width="+n3+">&nbsp;</td>");
    else
        document.write("<td bgcolor='black' width="+n3+">&nbsp;</td>");

document.write("</tr>");
document.write("</table>");*/

/*Adapta el ejercicio 4.11 utilizando un bucle while en vez de un bucle for.*/
/*var n1=parseInt(prompt("Introduce las columnas: "));
var n2=parseInt(prompt("Introduce la altura: "));
var n3=parseInt(prompt("Introduce la anchura: "));

document.write("<table border='0' cellspading='2' bgcolor='black' width='200'>")
document.write("<tr height="+n2+">");
var i=1;
while(i <= n1){
    i++;
    if(i%2==0)
        document.write("<td bgcolor='white' width="+n3+">&nbsp;</td>");
    else
        document.write("<td bgcolor='black' width="+n3+">&nbsp;</td>");
}
document.write("</tr>");
document.write("</table>");*/

/**Escribe un programa en JavaScript que consista en adivinar un número
previamente introducido por teclado (jugador 1).
El programa pedirá tantos números como intentos erróneos haga el jugador
2. Solamente terminará cuando el jugador 2 acierte.
El programa dará pistas al jugador 2 indicándole si su número es mayor o
menor que el número a adivinar. */

/*var n1;
var num =Math.floor(Math.random() * 100) + 1;

while(n1!=num){
    n1=parseInt(prompt("Introduce un numero: "));

    if(n1<num){
        alert("El numero debe ser mayor");
        alert(num);
    }
    if(n1>num){
        alert("El numero debe ser menor");
        alert(num);
    }
    if(n1===num){
        document.write("FELICIDADES HAS ACERTADO");
        
    }
    
}*/


/*Adaptar el ejercicio 4.15. al bucle DO..WHILE*/

/*var n1;
var num =Math.floor(Math.random() * 100) + 1;
do{
    n1=parseInt(prompt("Introduce un numero: "));

    if(n1<num){
        alert("El numero debe ser mayor");
        
    }
    if(n1>num){
        alert("El numero debe ser menor");
        
    }
    if(n1===num){
        document.write("FELICIDADES HAS ACERTADO");
        
    }
    
}while(n1!=num)*/

/*Hacer un programa en JavaScript que usando
dos bucles anidados for imprima por pantalla
todas las tablas de multiplicar.*/

/*for(let i=1;i<=10;i++){
    document.write("<h2>Tabla del "+i+"</h2><br>")
    for(let j=1;j<=10;j++)
        document.write(j+"x"+i+"="+j*i+"<br>");
}*/

/**Hacer un programa que pida por teclado cuatro valores: el número de
columnas y filas de una tabla y, la altura y anchura (en pixels) de sus
celdas. Una vez tecleados estos valores, el programa pintará en la página
web una tabla HTML del nº de filas por el nº de columnas tecleadas. */

/*var n1=parseInt(prompt("Introduce las columnas: "));
var n2=parseInt(prompt("Introduce las filas: "));
var n3=parseInt(prompt("Introduce la altura: "));
var n4=parseInt(prompt("Introduce la anchura: "));

document.write("<table border='0' cellspading='2' bgcolor='black' width='200'>")
for (let j=1;j<=n1;j++){
    document.write("<tr bgcolor='white' height="+n3+">");
    for(let i=1;i<=n2;i++)
        document.write("<td width="+n4+">&nbsp;</td>");
}
document.write("</tr>");
document.write("</table>");*/

/**Hacer un programa que pinte un tablero de ajedrez de 8x8 casillas usando
dos for anidados.
El programa pedirá solamente el ancho de la celda que será igual que el
alto. */


/*var n3=parseInt(prompt("Introduce la altura: "));
var n4=parseInt(prompt("Introduce la anchura: "));
var count=0;
document.write("<table border='0' cellspading='2' bgcolor='black' width='200'>")
for (let j=1;j<=8;j++){
    document.write("<tr height="+n3+">");
    for(let i=1;i<=8;i++){
        if((i+j)%2!=0)
            document.write("<td bgcolor='white' width="+n4+">&nbsp;</td>");
        else
            document.write("<td bgcolor='black' width="+n4+">&nbsp;</td>"); 
    }
}
document.write("</tr>");
document.write("</table>");*/
