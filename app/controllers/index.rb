
get "/" do
  
  erb :index
end  


get '/game' do
  # Look in app/views/index.erb
  
end

post "/" do
  @game = Game.create
  @player1=Player.find_by_name(params[:player1])
  @player2=Player.find_by_name(params[:player2])
  if @player1 == nil
    @player1 = Player.create(name:params[:player1], win:0)
  end  
    if @player2 == nil
      @player2 = Player.create(name:params[:player2], win:0)
    end  
  @game.players << @player1
  @game.players << @player2

  erb :game

end  

post "/game" do 
  p params.inspect

  @game = Game.find(params[:game_num].to_i)
  @winner = Player.find_by_name(params[:winner])
  @game.update_attributes(winner_name: @winner.name)
  @game.update_attributes(race_time: params[:time])
  @game.update_attributes(done: params[:done])
  p @game
  @winner.win += 1
  @winner.save
  {}

end  


