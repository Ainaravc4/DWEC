/*var cont=0;

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            maquetar(JSON.parse(this.responseText));
        }
    };
    xhttp.open("GET", "datos.json", true);
    xhttp.send();
  }

function maquetar(json){
    
    var ul= document.createElement("ul");
    document.getElementById("demo").appendChild(ul);

    for(let i=cont;i<json.correos.length;i++){
        var li= document.createElement("li");
        li.style.listStyle="none";
        li.style.border="1px solid gainsboro"
        li.textContent="From: "+json.correos[i].from+" ";
        li.textContent+=" Asunto: "+json.correos[i].texto;
        document.getElementsByTagName("ul")[0].appendChild(li);

        cont++;
    }
}

window.onload=()=>{
    setInterval(loadDoc,5000)
}*/

//API Stars Wars

 
var cont=0;

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            maquetar(JSON.parse(this.responseText));
        }
    };
    xhttp.open("GET","http://swapi.dev/api/people", true);
    xhttp.send();
  }

function maquetar(json){
    
    var ul= document.createElement("ul");
    document.getElementById("demo").appendChild(ul);

    for(let i=cont;i<json.results.length;i++){
        var li= document.createElement("li");
        li.style.listStyle="none";
        li.style.border="1px solid gainsboro"
        li.textContent=json.results[i].name;
        document.getElementsByTagName("ul")[0].appendChild(li);

        cont++;
    }
}

window.onload=()=>{
    setInterval(loadDoc,5000)
}


