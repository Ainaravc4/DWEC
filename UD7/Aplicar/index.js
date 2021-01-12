//API Stars Wars

 
var cont=0;

function loadDoc() {
    $.get("https://www.swapi.tech/api/people")
        .done(function( msg ) {
            maquetar(msg);
        });
}

function maquetar(json){
    var imgs=["https://upload.wikimedia.org/wikipedia/en/9/9b/Luke_Skywalker.png",
    "https://hipertextual.com/files/2013/03/carrie-fisher-sera-leia.jpg",
    "https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/71LFpKcZjGL._AC_SL1305_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/51YLwhk1HiL._AC_.jpg",
    "https://blogdesuperheroes.es/imagen-noti/86258_big-1280x720.jpg",
    "https://1.bp.blogspot.com/_wIW55V-xC00/Sy_eNc3mGfI/AAAAAAAACts/xXvuorug67g/s280/beru+joven+2.jpg",
    "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C780",
    "https://atlantica30.com/content/images/thumbs/0021492_star-wars-figura-16-r5-d4-22-cm.jpeg",
    "https://spoiler.bolavip.com/__export/1604585512125/sites/bolavip/img/2020/11/05/00-44_crop1604585147413.jpg_1910439964.jpg"]

    for(let i=cont;i<json.results.length;i++){
        var div=$("<div></div>").css({
            "background-color": "rgba(255,0,0,0.7)",
            "width":"13rem",
            "height":"13rem",
            "margin":"1rem",
            "border-radius":"50px"
        }).addClass("personaje");

        div.attr("url",json.results[i].url)
        
        $('div.personaje').click(function(){
            $.get($(this).attr('url'))
                .done(function( msg ) {
                    console.log(msg)
                    maquetarInformacion(msg);
                  });
            })


        var img=document.createElement("img");
        img.src=imgs[i];
        img.style.width="8rem";
        img.style.borderRadius="20px";
        img.style.height="8rem";
        img.style.marginLeft="2.5rem";

        var nombre= document.createElement("p");
        nombre.style.textAlign="center";
        nombre.style.color="white";
        nombre.style.fontSize="20px"
        nombre.textContent=json.results[i].name;

        div.append(nombre);
        div.append(img);
        $("div#demo").append(div);
        cont++;
    }
}


function maquetarInformacion(json){
    var info=document.getElementById("datos")
    info.style.backgroundColor="rgba(0,0,255,0.9)";
    info.style.borderRadius="100px";
    info.style.opacity="0.7";
    info.style.width="40rem";
    info.style.height="8rem";
    info.style.margin="auto";
    info.style.zIndex="1"

    //creacion de los datos
    var alto=document.getElementById("altura");
    var peso=document.getElementById("peso");
    var pelo=document.getElementById("pelo");
    var piel=document.getElementById("piel");

    
    //contenido de los datos
    alto.textContent="Height: "+json.result.properties.height+" cm";
    peso.textContent="Mass: "+json.result.properties.mass+" Kg";
    pelo.textContent="Hair Color: "+json.result.properties.hair_color;
    piel.textContent="Skin Color: "+json.result.properties.skin_color;
}


window.onload=()=>{
    setInterval(loadDoc,400)
}