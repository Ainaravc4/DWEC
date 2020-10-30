//1
//var btn = document.querySelector('button');
/*document.getElementById("btn").innerHTML += "<br><button id='boton'>Pulsa</button>";
function clicar() {
    alert("Se ha producido un evento");
  }    
  document.getElementById("boton").addEventListener("click", clicar);*/

//2
/*function mover(event){
    console.log("COOR X= "+event.offsetX+" COOR Y= "+event.offsetY);
}
document.getElementById("pantalla").innerHTML += "<p>ESTA ES LA PANTALLA</p>";
document.getElementById("pantalla").addEventListener("mousemove", mover);*/

/*window.onmousemove = function (){
  x = window.event.clientX;
  y = window.event.clientY;
  console.log(x,y);
}*/


/*4 Eventos onMouseMove y onLoad. Debemos ser capaces de dibujar con nuestro ratón
en dos colores diferentes. Para ello primero simularemos que disponemos de un
canvas gráfico: realmente se tratará de una tabla con celdas de pequeño tamaño
(100x100 puede valer). Tu programa creará ese canvas una vez cargada la página
(onLoad). Lo siguiente será detectar el movimiento del ratón sobre las celdas para
pintarlas de un color, el cual será rojo si se mantiene pulsada simultaneamente la
tecla Ctrl y azul si se pulsa Shift. En otro caso no deberá pintarse nada*/

/*function main(){
  document.write("<table >");
  for(let i = 0; i <= 19; i++){
      document.write("<tr height='20'>");
      for(let j = 0; j <= 19; j++){
          document.write("<td  onmousemove='color(event)' height='20' width='20'></td>");
      }
      document.write("</tr>");
  }    
  document.write("</table>");
  document.write("<button id='boton'>ELIMINAR</button>");
  document.getElementById("boton").addEventListener("click",borrarColor);
  
}

function color(event) {
  if(event.shiftKey) {
    event.target.style.backgroundColor = "blue";
  }
  if(event.ctrlKey) {
      event.target.style.backgroundColor = "red";
  }
  if(event.altKey){
      event.target.style.backgroundColor = "white";
  }
}

function borrarColor(){
  var tds=document.querySelectorAll("td");
  for(td of tds)
    td.style.backgroundColor = "white";
}
window.addEventListener("load", main);*/

//9

/*var imgs=document.querySelectorAll("img");
var imagenActual=null;
/**@type{Boolean} */

/*var arrastrando=false;

imgs.forEach(imagen=>{
  imagen.addEventListener("click",imagePulsada)
});
  window.addEventListener('mousemove',moverImagen);

function imagePulsada(e){
  arrastrando=!arrastrando;
   imagenActual=e.currentTarget;
}

function moverImagen(e) {
  if(arrastrando){
    
    imagenActual.style.marginLeft = (e.x-20)+"px";
    imagenActual.style.marginTop = (e.y-20)+"px";
    
  }   

}*/

 


 





