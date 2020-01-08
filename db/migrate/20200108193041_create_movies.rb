class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.integer :rating, null: false
      t.integer :year, null: false
      t.string :image_url, null: false
      t.timestamps
    end

    add_index :movies, :title 
  end
end
