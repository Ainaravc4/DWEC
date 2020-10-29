
class Jugador{
  constructor(nombre){
      this.nombre=nombre;
      this.result='';

  }
  ganador(){
    this.ganar++;
    
    document.write("<br>"+this.nombre+" ha ganado con "+this.result)
  }
  perdedor(){
    this.perder++;
    document.write("<br>"+this.nombre+" ha perdido  con "+this.result)
  }
  empate(){
    document.write("<br>"+this.nombre+" ha EMPATADO  con "+this.result);
  }

  tirada(){
    var sacar = Math.floor( Math.random() * 3+1);
    switch(sacar){
      case 1: this.result='Piedra';break;
      case 2: this.result='Papel';break;
      case 3: this.result='Tijera';
  }
    return this.result;

  }
}


class roshambo{
  constructor(u,m){
    this.usuario=u;
    this.maquina=m;
    

  }

  validar(){
    let veces=1;
    while(veces <=3){
        document.write("<br><h1>tirada "+veces+"</h1>")
        let turnoUsuario=this.usuario.tirada();
        let turnoMaquina=this.maquina.tirada();
    
    
        veces++;
        if(turnoUsuario == 'Piedra')
        {
        if(turnoMaquina =='Piedra')
        {
          this.usuario.empate();
          this.maquina.empate();
        }

        else if(turnoMaquina == 'Tijera')
        {
          this.maquina.ganador();
          this.usuario.perdedor();
        }

        else if(turnoMaquina == 'Papel')
        {
          this.usuario.ganador();
          this.maquina.perdedor();
          
        }

        }


        else if(turnoUsuario == 'Papel')
        {
        if(turnoMaquina =='Piedra')
        {
          this.usuario.ganador();
          this.maquina.perdedor();
          
        }

        else if(turnoMaquina == 'Papel')
        {
          this.usuario.empate();
          this.maquina.empate();
        }

        else if(turnoMaquina == 'Tijera') 
        {
          this.maquina.ganador();
          this.usuario.perdedor();
          
        }

        }



        else if(turnoUsuario == 'Tijera')
        {
        if(turnoMaquina == 'Piedra')
          {
            this.maquina.ganador();
            this.usuario.perdedor();
            
          }
          
          
          else if(turnoMaquina == 'Papel')
          {
            this.usuario.ganador();
            this.maquina.perdedor();
            
          }

          else if(turnoMaquina == 'Tijera')
          { 
            this.usuario.empate();
            this.maquina.empate();
          }

        }

      }
    }

    }


 //COMPROBACION



usuario=new Jugador("Ainara");
maquina=new Jugador("Profesor");
var r=new roshambo(usuario,maquina);
r.validar();
/*continuar='s';
do {
    r.validar();

  continuar=window.prompt("¿QUIERES JUGAR DE NUEVO?",'s').toUpperCase();
} while (continuar==='s');*/