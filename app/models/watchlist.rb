class Watchlist < ApplicationRecord
    validates :user_id, :movie_id, presence: true

    belongs_to :movie
    belongs_to :user
end
