//2 generar dado 
function lanzamiento(){
    var ale= parseInt(Math.random()*6)+1;
    return ale;
}
console.log(lanzamiento());

//3 comprobar si los nuemeros generados tienen la misma probabilidad
function lanzamiento2(){
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    let n4 = 0;
    let n5 = 0;
    let n6 = 0;

    for(let i = 1; i <= 60000; i++){
        var tirada = lanzamiento();

        if(tirada == 1){
            n1++;
        }else if(tirada == 2){
            n2++;
        }else if(tirada == 3){
            n3++;
        }else if(tirada == 4){
            n4++;
        }else if(tirada == 5){
            n5++;
        }else if(tirada == 6){
            n6++;
        }
    }
    document.write("Numero 1 --> "+n1+"<br>");
    document.write("Numero 2 --> "+n2+"<br>");
    document.write("Numero 3 --> "+n3+"<br>");
    document.write("Numero 4 --> "+n4+"<br>");
    document.write("Numero 5 --> "+n5+"<br>");
    document.write("Numero 6 --> "+n6+"<br>");
}
lanzamiento2();


//6 calcular potencias de forma recursiva

function pontencias(b, e){
    if(e==0){
        return 1;
    }else{
        result=b*pontencias(b,e-1);
        return result;
    }
}
document.write("La potencia es : <br>");
document.write(pontencias(2,8));

//7
function factorial(number){
    if(number == 0){
        return 1;
    }else{
        return number * factorial(number - 1);
    }
}

document.write("<br>Factorial: <br>");
document.write("<table border='black'>");

    for (j=1;j<11;j++){
        document.write("<tr>");
        document.write("<td>");
        document.write(factorial(j)+"<br>");
        document.write("</td>");
    }
    document.write("</tr>");



document.write("</table>");
