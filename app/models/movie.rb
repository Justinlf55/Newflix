class Movie < ApplicationRecord
    validates :title, :rating, :year, :image_url, presence: true
end
