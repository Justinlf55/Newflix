class Api::GenresController < ApplicationController
    before_action :require_logged_in

    def index
        @genres = Genre.all
        render :index
    end

    def show
        @genre = Genre.includes(:movies).find(params[:id])
        render :show
    end

    private
    def genre_search_params
        params.require(:genre).permit(:name)
    end
end
