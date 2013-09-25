$(document).ready(function() {

  var player_name = $('#player1').text()
  var game_num = $("h1").text()
  current_game = new Game(game_num, player_name)
  current_game.loop()
   });

  
  // $(document).bind('keyup',function(e){



    // alert('Enter key pressed!');
  // if (e.keyCode == 39){
     // defining variables
     
     // var last_block = $("#player1_strip td:last-child") 
     
       //moving the 'racer' if player 1 hit key 
     // var first_location = $('#player1_strip').find('.active');
     // var location = $('#player1_strip').find('.active').next();
     // $(location).addClass('active');
     // $(first_location).removeClass('active');    
   //  current_game.render()
   // // if (last_block.hasClass('active')){    
   //    $(document).unbind();
   //    raceFinish = new Date()
   //    // elapsed = Math.abs(raceFinish - raceStart);
     
   //    current_game = new Game(game_num, player_name, raceStart, raceFinish, true)
   //    console.log(current_game);
   //    current_game.elapsed_time();
   //    console.log(current_game.elapsed_time())
   //    // var stats ={winner: player_name, game_num: game_num, time: elapsed, done: true}
   //    // console.log(stats);
   //    console.log(current_game.stats)
   //    current_game.sendback

   //   }
   

   // else if(e.keyCode == 37 ){
    // defining variables
     // var last_block = $("#player2_strip td:last-child")
     // var player_name =$('#player2').text()
     // var game = $("h1").text() 
     // // moving the 'racer' if player2 hit key
     // var first_location = $('#player2_strip').find('.active')
     // var location = $('#player2_strip').find('.active').next();
     // $(location).addClass('active');
     // $(first_location).removeClass('active'); 
          
     // if (last_block.hasClass('active')){
     //   // $(document).unbind();
     //   // raceFinish = new Date()
     //   elapsed = Math.abs(raceFinish - raceStart);

     //   var stats ={winner: player_name, game_num: game, time: elapsed, done: true}
     //   console.log(stats);

     //   $.post("/game", stats, function(){});

     // }
  


  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
