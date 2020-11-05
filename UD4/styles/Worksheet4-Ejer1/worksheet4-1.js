//a)

/*document.getElementById("p1").addEventListener("click",modificarNormal);
document.getElementById("p2").addEventListener("click",modificarMinimalista);

function modificarNormal(){
    document.body.style.backgroundColor="#FFFCBD";

    document.getElementById("azul").style.backgroundColor="blue";
    document.getElementById("azul").innerHTML="<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>";
    document.getElementById("azul").style.width="20%";
    document.getElementById("azul").style.marginRight="50%";

    document.getElementById("yellow").style.marginLeft="22%";
    document.getElementById("yellow").style.marginTop="-35%";
    
    document.getElementById("div1").style.backgroundColor="yellow";

    document.getElementById("nav2").style.backgroundColor="azure";

    document.getElementById("p1").style.textDecoration = "none";
    document.getElementById("p2").style.textDecoration = "none";
    document.getElementById("h1").style.fontSize="24px";

    
}

function modificarMinimalista(){
    document.getElementById("ocultar").style.visibility = "hidden";
    document.getElementById("p2").href="index.html";
}*/

//b)

document.getElementById("p1").addEventListener("click",modificarNormal);
document.getElementById("p2").addEventListener("click",modificarMinimalista);

function  modificarNormal(){
    document.head.innerHTML="<LINK REL='stylesheet' TYPE='text/css' HREF='estilos1.css'>";
}
function  modificarMinimalista(){
    document.head.innerHTML="<LINK REL='stylesheet' TYPE='text/css' HREF='estilos2.css'>";
}