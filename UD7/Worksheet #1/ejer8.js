
$(document).ready(function() {
    //a
    $("div p:first").css({'fontSize': 14});
    $("div:nth-child(2) p:first").css({'fontSize': 20});
    $("div:nth-child(3) p:first").css({'fontSize': 28});

    //b
    $("div h2").click(function(){
        $(this).siblings("p").hide();//toggle
    })
    
    //c y d
    $("div p").hover(function() {
            $( this ).css("color","red");
          }, function() {
            $( this ).css("color","black");
          })
});

