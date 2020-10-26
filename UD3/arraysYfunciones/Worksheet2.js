//5 funcion paresImpares
/*function paresImpares(){
    var desor= new Array();
    var orden= new Array();

    for(i=1;i<=100;i++){
        desor.push(parseInt(Math.random()*1000+1));
    }

    var pares= new Array();
    var impares= new Array();
    for(j=1;j<=desor.length-1;j++){
        if(desor[j]%2==0){
            pares.push(desor[j]);
        }else
            impares.push(desor[j]);
    }
    
    orden.push(pares.concat(impares));
    

    console.warn("ARRAY");
    console.log(desor);
    console.warn("Pares");
    console.log(pares);
    console.warn("Impares");
    console.log(impares);
    console.warn("Orden");
    console.log(orden);

}*/

//paresImpares();
//7
// convertir elementos a cero
/*function elementosCero(cero){
    for(j=0;j<=cero.length-1;j++){
        cero[j]=0;
    }
    return cero;
}
var cero=new Array('1','5','6','8');
elementosCero(cero);*/

/*otra forma de acerlo
 function ponerACero(array){
     return array.map(n=>n=0)
 }*/
/**
 function ponerACero(array){
     return array.map((n,index)=>{
        if(index<10)
            return 0;
        else
            return n;
        
        })
 }
 */


//añadir 1 a los elementos del array
/*function añadirUno(uno){
    for(j=0;j<=uno.length-1;j++){
        uno[j]=uno[j]+"1";
    }
    return uno;
}
var uno = [1,2,3,4,5,6,7,8,9,10,"Hola",true];
añadirUno(uno);

/*otra forma de acerlo
 function sumarUno(array){
     return array.map(n=>n++)
 }*/

//separados por espacios
/*function separadosEspacios(espacio){
   document.write(espacio.join(" ")) ;
}
var espacio = [1,2,3,4,5,6,7,8,9,10,"Hola",true];
separadosEspacios(espacio);*/


//9.

function lanzamiento(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function dadosSuma(){
    let combinaciones =Array(6).fill(0).map(()=> Array(6).fill(0))
    let dado1, dado2;
    for(var i=0;i<36000;i++){
        dado1=lanzamiento(1,6);
        dado2=lanzamiento(1,6);
        combinaciones[dado1-1][dado2-1]++;
    }
    return combinaciones;
}
dadosSuma(); 

/*function simulationDice(){
    var arr = [];
    
    for(let i = 0; i <= 6; i++){
        var dice1 = parseInt(Math.random()*6+1);
        var dice2 = parseInt(Math.random()*6+1);
        arr.push(dice1 + dice2);
    }

    console.log(arr);

}
simulationDice();*/