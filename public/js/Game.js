
function Game(game_num) {
  this.game_num = game_num;
  this.done = false;
};

Game.prototype.sendback = function() {
  console.log("made it to the sendback test")
   $.post("/game", current_game.stats(), function(response) {
    if (response.excitement === 'Booyah') {
      console.log("it is working")
      alert("Your book is overdue.");
    }
   });
 };


Game.prototype.end = function() {
  $(document).unbind();
  current_game.racefinish = new Date();
  current_game.elapsed_time();
  current_game.done = true;
  console.log(current_game)
  console.log(current_game.stats());
  current_game.sendback();
};

Game.prototype.elapsed_time = function() {
  return this.racefinish - this.racestart
};

Game.prototype.stats = function() {
    return {game_id: current_game.game_num, winner: current_game.winner, elapsed_time: current_game.elapsed_time(), done: current_game.done}
 };



Game.prototype.render = function() {

  var last_block = $("#player1_strip td:last-child") 
  var first_location = $('#player1_strip').find('.active');
  var location = $('#player1_strip').find('.active').next();
  $(location).addClass('active');
  $(first_location).removeClass('active'); 
  if (last_block.hasClass('active')) {
    current_game.winner = $('#player1').text()
    current_game.end();
  }
};

Game.prototype.render2 = function() {
  
  var last_block = $("#player2_strip td:last-child") 
  var first_location = $('#player2_strip').find('.active');
  var location = $('#player2_strip').find('.active').next();
  $(location).addClass('active');
  $(first_location).removeClass('active');
  if (last_block.hasClass('active')) {
    current_game.winner = $('#player2').text()
    current_game.end();
    console.log(current_game)
  };
};

Game.prototype.loop = function() {
   $(document).bind('keyup',function(e){

    current_game.racestart = new Date();
    if (e.keyCode == 39){
      current_game.render();
    }
    else if(e.keyCode == 37 ){
      current_game.render2();
    }
   });
};





