function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            var texto=this.responseText;
            var json=JSON.parse(texto);
            var ul= document.createElement("ul");
            document.getElementById("demo").appendChild(ul);

            for(let i=0;i<json.listaNotas.length;i++){
                var li= document.createElement("li");
                li.textContent=json.listaNotas[i].titulo;
                document.getElementsByTagName("ul")[0].appendChild(li);
            }
      }
    };
    xhttp.open("GET", "jsonArray.txt", true);
    xhttp.send();
  }

  setInterval(loadDoc,3000)