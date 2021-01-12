$("document").ready( function(){
    // 1
    $("table td:lt(3)").css("background-color","red");
    $("table td:gt(3)").css("background-color","blue");
});