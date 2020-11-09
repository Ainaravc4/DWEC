/* 1. Diseña una web que hará uso de cookies para guardar el nombre del usuario. 
En caso de no tener ninguna cookie de ese sitio, deberá preguntar el nombre 
del usuario y almacenarlo en una cookie que caducará en 5 minutos. 
Tras esto saludará al usuario mediante un mensaje en pantalla. 
En caso de tener ya creada la cookie deberá leerla y mostrar el mensaje anterior
directamente. Deberá proporcionar también
 un enlace para borrar la cookie (lo que podríamos llamar 'Cerrar Sesión').*/
 
document.getElementById("labelFondo").style.visibility = "hidden";
document.getElementById("labelTexto").style.visibility = "hidden";
document.getElementById("labelTamaño").style.visibility = "hidden";
document.getElementById("colorFondo").style.visibility = "hidden";
document.getElementById("colorTexto").style.visibility = "hidden";
document.getElementById("tamaño").style.visibility = "hidden";
document.getElementById("boton3").style.visibility = "hidden";
document.getElementById("boton2").style.visibility = "hidden";

function iniciarSesion() {
    document.cookie="name="+document.getElementById("cookie").value+"; max-age=300";

    let nombreUsuario=getCookie("name");

    if(nombreUsuario==""){
        alert("Introduzca su nombre de usuario");

    }else{

        //DAMOS EL MENSAJE DE BIENVENIDA
        document.getElementById("mensaje").innerHTML="<center><h1>BIENVENIDO/A</h1></center>";

        //OCULTAMOS LAS ETIQUETAS E INPUT CORRESPONDIENTES
        document.getElementById("label").style.visibility = "hidden";
        document.getElementById("cookie").style.visibility = "hidden";
        document.getElementById("boton1").style.visibility = "hidden";

        //HACEMOS VISIBLES LAS ETIQUETAS E INPUTS CORRESPONDIENTES
        document.getElementById("labelFondo").style.visibility = "visible";
        document.getElementById("labelTexto").style.visibility = "visible";
        document.getElementById("labelTamaño").style.visibility = "visible";
        document.getElementById("colorFondo").style.visibility = "visible";
        document.getElementById("colorTexto").style.visibility = "visible";
        document.getElementById("tamaño").style.visibility = "visible";
        document.getElementById("boton3").style.visibility = "visible";
        document.getElementById("boton2").style.visibility = "visible";
    }
    
}

document.getElementById("boton1").addEventListener("click",iniciarSesion);



function cerrarSesion(){

    //BORRAMOS LAS COOKIES
    borrarCookie("name");
    borrarCookie("colorFondo");
    borrarCookie("colorTexto");
    borrarCookie("tamaño");

    //DEVOLVEMOS EL ESTILO DEL PRINCIPIO
    document.body.style.backgroundColor="white";
    document.getElementById("mensaje").style.backgroundColor="black";
    document.getElementById("mensaje").style.fontSize=22+"px";

    //LIMPIAMOS LOS INPUT
    document.getElementById("colorFondo").value="";
    document.getElementById("colorTexto").value="";
    document.getElementById("tamaño").value="";
    document.getElementById("cookie").value="";

    //OCULTAMOS Y MOSTRAMOS LOS INPUTS Y LOS BOTONES PERTINENTES
    document.getElementById("label").style.visibility = "visible";
    document.getElementById("cookie").style.visibility = "visible";
    document.getElementById("boton1").style.visibility = "visible";

    document.getElementById("mensaje").style.visibility = "hidden";
    document.getElementById("labelFondo").style.visibility = "hidden";
    document.getElementById("labelTexto").style.visibility = "hidden";
    document.getElementById("labelTamaño").style.visibility = "hidden";
    document.getElementById("colorFondo").style.visibility = "hidden";
    document.getElementById("colorTexto").style.visibility = "hidden";
    document.getElementById("tamaño").style.visibility = "hidden";
    document.getElementById("boton3").style.visibility = "hidden";
    document.getElementById("boton2").style.visibility = "hidden";

}
document.getElementById("boton2").addEventListener("click",cerrarSesion)





/*2. Mejora el ejercicio anterior dando al usuario las opciones para que pueda
 configurar el color de fondo, de párrafo y el tamaño de la letra.*/


window.onload=function(){
    let colorFondo=getCookie("colorFondo");
    let colorTexto=getCookie("colorTexto");
    let tamañoTexto=getCookie("tamaño");

    if(colorFondo){
        document.body.style.backgroundColor=colorFondo;
    }
    if(colorTexto){
        document.body.style.backgroundColor=colorTexto;
    }
    if(tamañoTexto){
        document.body.style.backgroundColor=tamañoTexto;
    }
}

function colorFondo(){
    let color=document.getElementById("colorFondo").value;
    document.body.style.backgroundColor=color;
    document.cookie = "colorFondo="+color;
}
function colorTexto(){
    let color=document.getElementById("colorTexto").value;
    document.getElementById("mensaje").style.color=color;
    document.cookie = "colorTexto="+color;
}
function tamañoTexto(){
    let e=document.getElementById("tamaño");
    let tamaño = e.options[e.selectedIndex].text;
    document.getElementById("mensaje").style.fontSize=tamaño+"px";
    document.cookie = "tamaño="+tamaño;
}


function estilos(){
    colorFondo();
    colorTexto();
    tamañoTexto();
}

document.getElementById("boton3").addEventListener("click",estilos)


//4. Crea 3 funciones genéricas para el manejo de cookies:

//a) CrearCookie(identificador,valor,fechaExpiracion): Crea la cookie con sólo un par identificador=valor.
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//b) LeerCookie(identificador): Devuelve el valor dentro de la cookie para el identificador indicado si existe o null en caso contrario.
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

//c) BorrarCookie().
function borrarCookie(n){
    document.cookie = n + "=;expires=Wed, 04 Jul 1444 09:30:01 GMT";
}