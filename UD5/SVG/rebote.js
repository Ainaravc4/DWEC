import{bola} from "./clases.js"

//ejercicio 3 utilizar la clase para que cree una bola en movimiento
/*var bola2=new bola(450,450,40,"pink");
bola2.pintar();
bola2.mover(1,2);*/




//ejercicio 4 crear 100 bolas con la clase, con colores y direcciones diferentes.
//var colores=["red","pink","orange","brown","blue","green","yellow","aqua","black"];


var bolas=[];
var incrX=parseInt(Math.random()*14+1); 
var incrY=parseInt(Math.random()*10+1);
for(let i=0;i<100;i++){
        var x=parseInt(Math.random()*450+1); 
        var y=parseInt(Math.random()*450+1); 
        bolas.push(new bola(x,y,7,getRandomColor()));

}
for(let bola of bolas){
    bola.mover(incrX,incrY);
    bola.pintar();
    
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}