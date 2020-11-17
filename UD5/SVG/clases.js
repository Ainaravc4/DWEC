
class bola{
    constructor(x,y,r,color){
        this.x=x;
        this.y=y;
        this.r=r;
        this.color=color;
        this.circle=null;
    }
    pintar(){
        var espacio=document.getElementById("espacio");
        this.circle=document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.circle.setAttribute("cx",this.x);
        this.circle.setAttribute("cy",this.y);
        this.circle.setAttribute("r",this.r);
        this.circle.setAttribute("fill",this.color);
        
        espacio.appendChild( this.circle);
    }
    mover(incX,incY){
        setInterval(()=>{
            this.x+=incX;
            this.y+=incY;
            this.circle.setAttribute("cx",this.x);
            this.circle.setAttribute("cy",this.y);
            
            if(this.x>=500||this.x<=0)
                incX*=-1;

            if(this.y>=500||this.y<=0)
                incY*=-1;
        },30)
        
            
        
       

    }
    
    
}
export{bola};
