class Movie < ApplicationRecord
    validates :title, :rating, :year, :description, presence: true

    has_many :movie_genres
    has_many :watchlists

    has_many :genres,
    through: :movie_genres,
    source: :genre

    has_many :users,
    through: :watchlists,
    source: :user

    has_one_attached :image
    has_one_attached :video

end
