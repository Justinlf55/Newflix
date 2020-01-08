class Api::MoviesController < ApplicationController
    before_action :require_logged_in

    def index
        @movies = Movie.all
        render :index
    end

    def show
        @movie = Movie.find(params[:id])
        render :show
    end

    private
    def movie_search_params
        params.require(:movie).permit(:title)
    end
end
