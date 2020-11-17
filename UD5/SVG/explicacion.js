
window.onload=()=>{
    setInterval(anima,30);
}


var posX1=0;var posY1=0;
var incX1=20;var incY1=4;

var posX2=0;var posY2=0;
var incX2=10;var incY2=2;

var posX3=0;var posY3=0;
var incX3=2;var incY3=15;

function anima(){
    let bola=document.getElementById("bola");
    let bola2=document.getElementById("bola2");
    let bola3=document.getElementById("bola3");

    bola.setAttribute("cx",posX1);
    bola.setAttribute("cy",posY1);
    posX1+=incX1;
    posY1+=incY1;
    if(posX1>=500||posX1<=0)
        incX1*=-1;

    if(posY1>=500||posY1<=0)
        incY1*=-1;

    bola2.setAttribute("cx",posX2); 
    bola2.setAttribute("cy",posY2);
    posX2+=incX2;
    posY2+=incY2;
    if(posX2>=500||posX2<=0)
        incX2*=-1;

    if(posY2>=500||posY2<=0)
        incY2*=-1;

    bola3.setAttribute("cx",posX3); 
    bola3.setAttribute("cy",posY3);
    posX3+=incX3;
    posY3+=incY3;

    if(posX3>=500||posX3<=0)
        incX3*=-1;

    if(posY3>=500||posY3<=0)
        incY3*=-1;
    
}
