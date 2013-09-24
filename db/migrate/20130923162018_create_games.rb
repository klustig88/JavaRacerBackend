class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :winner_name
      t.boolean :done
      t.time :race_time
    end   
  end
end
