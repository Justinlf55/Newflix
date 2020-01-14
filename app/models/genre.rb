class Genre < ApplicationRecord
    validates :name, presence: true

    has_many :movie_genres
    
    has_many :movies, 
    through: :movie_genres, 
    source: :movie

end
