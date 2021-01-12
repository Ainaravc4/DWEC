  
$( document).ready(function() {
    $("button:first").click(function(){
        $('div').animate({
            'left':"-=200px",
            'margin-top': '-60px',
            'background-color':'blue',
            opacity: 0
        },1000);
    })
    $("#ult").click(function(){
        $('div').animate({
            left:"500px", 
            'margin-top': '0px',
            opacity: 1,
            backgroundColor: "red" 
        });
    })
 });
 //lo del color no me funciona