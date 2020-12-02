class Api::WatchlistsController < ApplicationController
    before_action :require_logged_in

    def index
        @watchlists = Watchlist.where("user_id = #{current_user.id}")
        render :index
    end

    def create
        @watchlist = Watchlist.new(watchlist_params)
        @watchlist.user_id = current_user.id
        @watchlist.save
        render :index
    end

    def destroy
        @mylist = current_user.watchlist_movies.find_by(movie_id: params[:id])
        if @mylist
            @mylist.destroy
            render :show
        else 
            render json: {message: "Not found in my list"}, status: 422
        end
    end

    private 
    def watchlist_params
        params.require(:movie).permit(:movie_id)
    end
end
