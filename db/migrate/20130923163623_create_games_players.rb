class CreateGamesPlayers < ActiveRecord::Migration
  def change
    create_table :games_players do |t|
      t.belongs_to :player
      t.belongs_to :game
    end  
  end
end
