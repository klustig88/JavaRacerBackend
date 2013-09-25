
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
  p "params for this one look like this>>>"
  p params
  @game = Game.find_by_id(params[:game_id].to_i)
  p "this is the game"
  p @game
  @game.update_attributes(winner_name: params[:winner], race_time: params[:elapsed_time], done: params[:done])

  p @game
    content_type :json
    {excitement: "Booyah"}.to_json
 
end  


