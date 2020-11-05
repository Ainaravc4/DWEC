//PARRAFO 1.

document.getElementById("mt1").addEventListener("click",modificarTamaño1);
document.getElementById("mm1").addEventListener("click",modificarMargen1);
document.getElementById("dt1").addEventListener("click",modificarTamañoDefecto1);

function modificarTamaño1(){
    var tamaño=document.getElementById("tamaño1").value;
    document.getElementById("p1").style.fontSize=tamaño+"px";
}
function modificarMargen1(){
    var margen=document.getElementById("margen1").value;
    if (margen=="justify"||margen=="left")
        document.getElementById("p1").style.textAlign=margen;
    else
        alert("Solo puedes modificar el margen a la izquierda o justificarlo")
}
function modificarTamañoDefecto1(){
    document.getElementById("p1").style.fontSize="16px";
}


//PARRAFO 2.
document.getElementById("mt2").addEventListener("click",modificarTamaño2);
document.getElementById("mm2").addEventListener("click",modificarMargen2);
document.getElementById("dt2").addEventListener("click",modificarTamañoDefecto2);

function modificarTamaño2(){
    var tamaño=document.getElementById("tamaño2").value;
    document.getElementById("p2").style.fontSize=tamaño+"px";
}
function modificarMargen2(){
    var margen=document.getElementById("margen2").value;
    if (margen=="justify"||margen=="left")
        document.getElementById("p2").style.textAlign=margen;
    else
        alert("Solo puedes modificar el margen a la izquierda o justificarlo")
}
function modificarTamañoDefecto2(){
    document.getElementById("p2").style.fontSize="16px";
}

//PARRAFO 3.
document.getElementById("mt3").addEventListener("click",modificarTamaño3);
document.getElementById("mm3").addEventListener("click",modificarMargen3);
document.getElementById("dt3").addEventListener("click",modificarTamañoDefecto3);

function modificarTamaño3(){
    var tamaño=document.getElementById("tamaño3").value;
    document.getElementById("p3").style.fontSize=tamaño+"px";
}
function modificarMargen3(){
    var margen=document.getElementById("margen3").value;
    if (margen=="justify"||margen=="left")
        document.getElementById("p3").style.textAlign=margen;
    else
        alert("Solo puedes modificar el margen a la izquierda o justificarlo")
}
function modificarTamañoDefecto3(){
    document.getElementById("p3").style.fontSize="16px";
}

//PARRAFO 4.
document.getElementById("mt4").addEventListener("click",modificarTamaño4);
document.getElementById("mm4").addEventListener("click",modificarMargen4);
document.getElementById("dt4").addEventListener("click",modificarTamañoDefecto4);

function modificarTamaño4(){
    var tamaño=document.getElementById("tamaño4").value;
    document.getElementById("p4").style.fontSize=tamaño+"px";
}
function modificarMargen4(){
    var margen=document.getElementById("margen4").value;
    if (margen=="justify"||margen=="left")
        document.getElementById("p4").style.textAlign=margen;
    else
        alert("Solo puedes modificar el margen a la izquierda o justificarlo")
}
function modificarTamañoDefecto4(){
    document.getElementById("p4").style.fontSize="16px";
}