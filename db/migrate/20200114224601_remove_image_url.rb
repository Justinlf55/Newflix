class RemoveImageUrl < ActiveRecord::Migration[5.2]
  def change
    remove_column :movies, :image_url
  end
end
