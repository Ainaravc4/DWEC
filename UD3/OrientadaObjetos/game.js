
class roshambo{
  constructor(){
    this.opcionUsuario=0;
    this.opcionMaquina=1;
    

  }

  tiradaUsuario(opcionUsuario){
    return opcionUsuario;


  }
  tiradaMaquina(){
    var sacar = Math.floor( Math.random() * 3 );
    return sacar;

  }

 }


 //COMPROBACION
 var r=new roshambo();
 var sacaUsuario=r.tiradaUsuario(2);
 var sacaMaquina=r.tiradaMaquina();




if(sacaUsuario == 0)
{
  alert("Elegiste Piedra!");
  if(sacaMaquina == 0)
  {
  	alert("Empate! Tu oponente ha sacado Piedra");
  }
  
  else if(sacaMaquina == 2)
  {
    alert("Perdiste! Tu oponente ha sacado Papel");
  }
  
  else if(sacaMaquina == 3)
  {
    alert("Ganaste! Tu oponente ha sacado Tijera");
  }

}
  
  
else if(sacaUsuario == 1)
{
  alert("Elegiste Papel!");
  if(sacaMaquina == 0)
  {
    alert("Ganaste! Tu oponente ha sacado Piedra");
  }
  
  else if(sacaMaquina == 1)
  {
    alert("Empate! Tu oponente ha sacado Papel");
  }
  
  else if(sacaMaquina == 2) 
  {
    alert("Perdiste! Tu oponente ha sacado Tijera");
  }
  
}



else if(sacaUsuario == 2)
{
  alert("Elegiste tijera!");
	if(sacaMaquina == 0)
    {
      alert("Perdiste! Tu oponente ha sacado Piedra");
    }
    
    
    else if(sacaMaquina == 1)
    {
      alert("Ganaste!Tu oponente ha sacado Papel");	
    }

    else if(sacaMaquina == 2)
    { 
      alert("Empate! Tu oponente ha sacado Tijera");
    }

}

else

{
	alert("Debes elegir 0,1 ó 2!");
}
