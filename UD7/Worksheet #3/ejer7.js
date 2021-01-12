$( "#show" ).click(function() {
    $( "div" ).first().show( "fast", function showNext() {
      $( this ).next( "div" ).show( "fast", showNext );
    });
  });
   
  $( "#hide" ).click(function() {
    $( "div" ).toggle( "slow" );
  });