var cont=0;
function loadDoc() {
  
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        
            var texto=this.responseText;
            var json=JSON.parse(texto);
            var ul= document.createElement("ul");
            document.getElementById("demo").appendChild(ul);

            for(let i=cont;i<json.listaNotas.length;i++){
              cont++;
                var li= document.createElement("li");
                li.textContent=json.listaNotas[i].titulo;
                li.onclick=()=>{contenido(json)}
                document.getElementsByTagName("ul")[0].appendChild(li);
            }
      }
    };
    xhttp.open("GET", "jsonArray.txt", true);
    xhttp.send();
  }

  function contenido(json){
    var div=document.createElement("div");
    document.body.append(div);
    for(let i=0;i<json.listaNotas.length;i++){
      div.textContent=json.listaNotas[i].texto[1];
    }
  }
  setInterval(loadDoc,1000)