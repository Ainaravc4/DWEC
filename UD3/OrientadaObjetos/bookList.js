class BookList{
    constructor(){
        this.myBooks=[];
        this.currentBook=0;
        this.numNoLeido=0;
        this.ultimo
    }

    add(book){
        this.myBooks.push(book);
    }

    finishCurrentBook(){
        if(this.currentBook<=this.myBooks.length)
            this.currentBook++;
        this.myBooks[this.currentBook-1].read=true;
        this.myBooks[this.currentBook-1].readDate= new Date();
        this.ultimo=this.currentBook;
        return this.ultimo;
    }

    siguienteLibro(){
        for(this.i of this.myBooks)
            if(this.i.read==false)
                return this.i;
    }

    get libroActual(){
        return this.myBooks[this.currentBook];//esto coje el libro que esta en la posicion indicada
    }

    get librosLeidos(){
        return this.myBooks.filter((libro)=>libro.read).length;//si devuelve falso lo quista de la lista
    }
    
    get librosSinLeer(){
        return this.myBooks.filter((libro)=>!libro.read).length;
    }

}

class Book{
    constructor(title, genre, author){
        this.title=title;
        this.genre=genre;
        this.author=author;
        this.read=false;
        this.readDate= 0;

    }
}

let lista= new BookList();



function main(){
    cargarForm();
    crearTabla();
}

window.addEventListener("load",main);
document.getElementById("subir").addEventListener("click",crearTabla);  
document.getElementById("subir").addEventListener("click",cargarForm);  

function cargarForm(){
    let titulo=document.getElementById("titulo").value;
    let genero=document.getElementById("genero").value;
    let autor=document.getElementById("autor").value;
    if(titulo==""||genero==""||autor==""){
        alert("Todos los campos deben ser rellenados");
    }else{
        lista.add(new Book(titulo,genero,autor));
    }
    titulo=="";
    genero=="";
    autor=="";

}

function crearTabla(){
    let table="";
    table+="<table id='tablaLibros' style='width:100%' border='solid'>";
    table+="<thead><th>Titulo</th><th>Genero</th><th>Autor</th><th>Leido</th><th>Fecha</th></thead>";
    for(libro of lista.myBooks){
        table+="<tr><td>"+libro.title+"</td><td>"+libro.genre+"</td><td>"+libro.author+"</td>";
    }
    
    document.getElementById("tabla").innerHTML=table;
}

