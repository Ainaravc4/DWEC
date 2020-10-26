function calculateSupply(edad,num){
    var max=100;
    var total=(num*365)*(max-edad);
    var mensaje="Necesitara "+total+" para que te duren hasta la vejez de "+max;
    alert(mensaje);
};

calculateSupply(19,50);