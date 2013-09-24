$(document).ready(function() {

  raceStart = new Date();

  $(document).bind('keyup',function(e){
     
    // alert('Enter key pressed!');
   if (e.keyCode == 39){
     
     var first_location = $('#player1_strip').find('.active');
     var location = $('#player1_strip').find('.active').next();
     $(location).addClass('active');
     $(first_location).removeClass('active'); 
     var data= $("#player1_strip td:last-child") 
     var player_name =$('#player1').text()
     var game = $("h1").text()  
     
     if (data.hasClass('active')){
      
      $(document).unbind();
      raceFinish = new Date()
      elapsed = Math.abs(raceFinish - raceStart);
      console.log( elapsed )
      // var elapsed = finish.getTime / 1000 - start.getTime / 1000
      var stats ={winner: player_name, game_num: game, time: elapsed, done: true}
      console.log(stats);
      $.post("/game", stats, function(){});


       

     }

   }
   else if(e.keyCode == 37 ){
    var start = new Date() 
     var first_location = $('#player2_strip').find('.active')
     var location = $('#player2_strip').find('.active').next();
     $(location).addClass('active');
     $(first_location).removeClass('active'); 
     var data= $("#player2_strip td:last-child")
     var player_name =$('#player2').text()
     var game = $("h1").text()      
     if (data.hasClass('active')){
       $(document).unbind();
       raceFinish = new Date()
       elapsed = Math.abs(raceFinish - raceStart);
       console.log( elapsed )
      // var elapsed = finish.getTime / 1000 - start.getTime / 1000
       var stats ={winner: player_name, game_num: game, time: elapsed, done: true}
       console.log(stats);
       $.post("/game", stats, function(){});

     }
     
   }
  });
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});
