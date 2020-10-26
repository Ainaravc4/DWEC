/*function cuadrado(numero){
    numero=10;
    return numero*numero;
}
var miValor=3;
var result= cuadrado(miValor);
console.log(result, miValor);*/

//otra forma de definir funciones
/*var f= function(x){
    return x*x;
}
var result2=f(miValor);
console.log(result2);

// recursividad
function factorial(n) {
    if ((n === 0) || (n === 1))
      return 1;
    else
      return (n * factorial(n - 1));
  }

  // recursividad 2
  function cuadrado(numero1,n2){
   
    return arguments[0]*arguments[1];
} 
*/
// dos formas de hacer una funcion

/*var a2 = a.map(function(s) { return s.length; });

console.log(a2); // logs [8, 6, 7, 9]

var a3 = a.map(s => s.length);

console.log(a3); // logs [8, 6, 7, 9]*/

//la funcion arrow permite que no haya errores
/*function Person() {
    // The Person() constructor defines `this` as itself.
    this.age = 0;
  
    setInterval(()=>{this.age++},100);
  }
  
  var p = new Person();
  console.log(p);*/