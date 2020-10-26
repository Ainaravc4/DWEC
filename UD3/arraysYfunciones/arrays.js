var nombre=["jose",3,"juan"];
console.log(nombre[1])
// esta forma y la anterior son iguales
var nombre=new Array ("jose",3,"juan");
console.log(nombre[2])

//nos dice el tamaño
console.log(nombre.length)

//no permite decirle el tamaño de nuestro array
let arr = []
arr.length = 42
//foreach es una funcion propia del array que recorre el array y devuelve el contenido
/*let colors = ['red', 'green', 'blue']
colors.forEach(function(color) {
  console.log(color)
})*/

let colors = ['red', 'green', 'blue']
colors.forEach((color, indice)=>console.log("Muestro posicion "+indice+" que contiene el valor "+color));


//concatenacion en un array
let myArray = new Array('1', '2', '3')
myArray = myArray.concat('a', 'b', 'c')
// myArray is now ["1", "2", "3", "a", "b", "c"]

//separar el array por el delimitador que escojamos
let myArray2 = new Array('Wind', 'Rain', 'Fire')
let list = myArray2.join(' - ') // list is "Wind - Rain - Fire"


//añadir al final en un array, y el shift lo hace al reves
let myArray3 = new Array('1', '2')
myArray3.push('3')  // myArray is now ["1", "2", "3"]

//quitar el ultimo elemento, y el unshift lo hace al reves
let myArray4 = new Array('1', '2', '3')
let last = myArray4.pop()
// myArray is now ["1", "2"], last = "3"

//sort nos ordena el array
let myArray5 = new Array('Wind', 'Rain', 'Fire')
myArray5.sort()
// sorts the array so that myArray = ["Fire", "Rain", "Wind"]


function compareNumbers(a, b) {
    return a - b;
  }

  let myArray6 = new Array(1, 12, 2)
//forma 1
//myArray6.sort(compareNumbers)

//forma2 
myArray6.sort((a,b)=>a-b);

//recorre un array sin necesidad de un bucle en la funcion
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);