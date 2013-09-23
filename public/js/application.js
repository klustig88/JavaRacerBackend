$(document).ready(function() {
  $(document).bind('keyup',function(e){
    // alert('Enter key pressed!');
   if (e.keyCode == 39){
     var first_location = $('#player1_strip').find('.active');
     var location = $('#player1_strip').find('.active').next();
     $(location).addClass('active');
     $(first_location).removeClass('active'); 
     var data= $("#player1_strip td:last-child")     
     if (data.hasClass('active')){
       $(document).unbind();
     }

   }
   else if(e.keyCode == 37 ){
     var first_location = $('#player2_strip').find('.active')
     var location = $('#player2_strip').find('.active').next();
     $(location).addClass('active');
     $(first_location).removeClass('active'); 
     var data= $("#player2_strip td:last-child")     
     if (data.hasClass('active')){
       $(document).unbind();
     }
     
   }
  });
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});
