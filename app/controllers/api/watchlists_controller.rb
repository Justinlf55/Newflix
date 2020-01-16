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
    end

    private 
    def watchlist_params
        params.require(:watchlist).permit(:movie_id)
    end
end
