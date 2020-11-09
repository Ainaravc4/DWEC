//NOMBRE
function nombre() { 
    var n = document.getElementById("nombre").value;
    var regl = /^[A-Z]{1}[a-z]/;
    
    if(!regl.test(n) ){
        document.getElementById("nombre").value = "";
        document.getElementById("nombre").focus();
        document.getElementById("error").innerHTML="<p>Debes poner tu primera inicial en mayuscula y las demas en minuscula</p>"
    }
    else{
        document.getElementById("error").innerHTML="";
        document.getElementById("nombre").style.borderColor="#00FF1F";
    }
        

      
} 
document.getElementById("nombre").addEventListener("blur",nombre);

//APELLIDO
function apellido() { 
    var a = document.getElementById("apellido").value;
    var regl = /^[A-Z]{1}[a-z]/;
    
    if(!regl.test(a) ){
        document.getElementById("error").innerHTML="<p>Debes poner tu primera inicial en mayuscula y las demas en minuscula</p>"
        document.getElementById("apellido").value = "";
        document.getElementById("apellido").focus();
    }
    else{
        document.getElementById("error").innerHTML="";
        document.getElementById("apellido").style.borderColor="#00FF1F";
    }
        
      
} 
document.getElementById("apellido").addEventListener("blur",apellido);

//DNI

function dni() { 
    var d = document.getElementById("dni").value;
    var regl = /^\d{8}[A-Z]{1}$/;
    
    if(!regl.test(d) ){
        document.getElementById("error").innerHTML="<p>Debes seguir el modelo que se te presenta en el ejemplo</p>"
        document.getElementById("dni").value = "";
        document.getElementById("dni").focus();
    }
    else{
        document.getElementById("error").innerHTML="";
        document.getElementById("dni").style.borderColor="#00FF1F";
    }
        
} 
document.getElementById("dni").addEventListener("blur",dni);


//TELEFONO

function telefono() { 
    var t = document.getElementById("telefono").value;
    var regl = /^\d{3}-\d{3}-\d{3}$/;
    
    if(!regl.test(t) ){
        document.getElementById("error").innerHTML="<p>>Debes seguir el modelo que se te presenta en el ejemplo</p>"
        document.getElementById("telefono").value = "";
        document.getElementById("telefono").focus();
    }
    else{
        document.getElementById("error").innerHTML="";
        document.getElementById("telefono").style.borderColor="#00FF1F"; 
    }
         
} 
document.getElementById("telefono").addEventListener("blur",telefono);

// EMAIL

function email() { 
    var e = document.getElementById("email").value;
    var regl = 	/^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
    
    if(!regl.test(e) ){
        document.getElementById("error").innerHTML="<p>>Debes seguir el modelo que se te presenta en el ejemplo</p>"
        document.getElementById("email").value = "";
        document.getElementById("email").focus();
    }
    else{
        document.getElementById("email").style.borderColor="#00FF1F";
        document.getElementById("error").innerHTML="";
    }
       
      
} 
document.getElementById("email").addEventListener("blur",email);


// USUARIO

function usuario() { 
    var usu = document.getElementById("usuario").value;
    var regl = 	/^[a-zA-Z0-9!#$%&]{8,14}$/;
    
    if(!regl.test(usu) ){
        document.getElementById("error").innerHTML="<p>Debes poner como minimo 8 caracteres entre los que tiene que haber por lo menos 1 mayuscula 1 numero y 1 caracter no alfanumerico</p>"
        document.getElementById("usuario").value = "";
        document.getElementById("usuario").focus();
    }
    else{
        document.getElementById("usuario").style.borderColor="#00FF1F"; 
        document.getElementById("error").innerHTML="";
    }
        
} 
document.getElementById("usuario").addEventListener("blur",usuario);