
//FORMA 1 DE HACERLO

/*const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.onclick = function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}*/


//FORMA 2 DE HACERLO

/*function random(number) {
  return Math.floor(Math.random() * (number+1));
}

function bgChange() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}    
document.getElementById("btnColor").innerHTML+="<button id ='btn'>Cambiar Color</button>";
document.getElementById("btn").addEventListener('click', bgChange);*/


//esta funcion se esta llamando desde html
/*function miFuncion(){
    alert("Funciona");
}

myElement.addEventListener('click', functionA);
myElement.addEventListener('click', functionB);*/