
$( document).ready(function() {
    $("input").keydown(function(e){
        if($('input').val().length<5){
            $("p").text("La contraseña no es segura")
        }else 
            if($('input').val().length>5 && $('input').val().length<8){
                $("p").text("La contraseña es medianamente segura")
            }else
                if($('input').val().length>8){
                    $("p").text("La contraseña es segura")
                }
        })
    })
