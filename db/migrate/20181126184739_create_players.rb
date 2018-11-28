class CreatePlayers < ActiveRecord::Migration[5.1]
  def change
    create_table :players do |t|
      t.integer :val1
      t.integer :val2
      t.integer :val3
      t.integer :val4
      t.integer :val5
      t.integer :val6

      t.timestamps
    end
  end
end
