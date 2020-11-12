//1
//a
//document.getElementsByTagName("a").length

//b
//document.getElementsByTagName("a")[2].href

//c
/*window.addEventListener("load",function(){
var n=0;
var enlaces=document.getElementsByTagName("a");
for (i=0;i<enlaces.length;i++){
    if(enlaces[i].href=="https://www.google.es/"){
        n++;
    }
}
console.log("el numero de enlaces que dirigen a google son "+n)
})*/


//d

/*var p3=document.getElementsByTagName("p")[2]
p3.getElementsByTagName("a").length*/

//4
/*document.getElementById("boton").addEventListener("click",function(){

    var newLi= document.createElement("li");
    var newText= document.createTextNode("hola");
    
    newLi.appendChild(newText);
    document.getElementsByTagName("ul")[0].appendChild(newLi);

})*/


//5

/*var newUl=document.createElement("ul");
document.body.appendChild(newUl);

document.getElementById("enviar").addEventListener("click",function(){

var newLi=document.createElement("li");
var newText= document.createTextNode(document.getElementById("input").value);

newLi.appendChild(newText);
document.getElementsByTagName("ul")[0].appendChild(newLi);
});

document.getElementById("añadir").addEventListener("click",function(){
    var input=document.createElement("input");
    input.type="file";
    input.id="input";
    document.body.appendChild(input);
});*/


//6


/*var fotos=["img1.jpg","img2.jpg","img3.jpg"]

document.getElementById("derecha").addEventListener("click",function(){
    var fotoActual=document.getElementById("img").getAttribute("src");
    var cont=0;
    for(i=0;i<fotos.length-1;i++){
        cont++;
        if(fotos[i]==fotoActual){
            document.getElementById("img").setAttribute("src",fotos[cont++] )
            
        }

    }
    
})

document.getElementById("izquierda").addEventListener("click",function(){
    var fotoActual=document.getElementById("img").getAttribute("src");
    var cont=fotos.length;
    for(i=fotos.length;i>0;i--){
        cont--;
        if(fotos[i]==fotoActual){
            document.getElementById("img").setAttribute("src",fotos[cont--] )
        }
    }
})*/