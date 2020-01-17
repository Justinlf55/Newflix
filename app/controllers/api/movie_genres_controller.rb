class Api::MovieGenresController < ApplicationController
    def create
        @movie_genre = MovieGenre.new(movie_genre_params)
        @movie_genre.save
    end

    private
    def movie_genre_params
        params.require(:movie_genre).permit(:movie_id, :genre_id)
    end
end