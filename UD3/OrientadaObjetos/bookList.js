class BookList{
    constructor(){
        this.myBooks=[];
        this.currentBook=0;
        this.numNoLeido=0;
    }

    add(book){
        this.myBooks.push(book);
    }

    finishCurrentBook(){
        if(this.currentBook<=this.myBooks.length)
            this.currentBook++;
        this.myBooks[this.currentBook-1].read=true;
        this.myBooks[this.currentBook-1].readDate= new Date();
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

var tabla="<table border='1'>";
tabla += "<tr>";
tabla+= "<th> Titulo </th><th> Genero </th> <th> Autor </th>";
for (i=1;i<=6;i++)


tabla+="</tr>";

tabla+="</table>"
document.write(tabla);

var titulo= document.getElementById("titulo");
var genero= document.getElementById("genero");
var autor= document.getElementById("autor");

var b= new Book("yo","el","tu");
var a= new Book("titulo","genero","autor");
var c= new Book("a","c","r");

var lista= new BookList();
lista.add(a);
lista.add(b);
lista.add(c);

console.log("SIN Leer "+lista.librosSinLeer);
console.log("Leidos "+lista.librosLeidos);

lista.finishCurrentBook();
lista.finishCurrentBook();
lista.finishCurrentBook();
console.log("SIN Leer "+lista.librosSinLeer);
console.log("Leidos "+lista.librosLeidos);
