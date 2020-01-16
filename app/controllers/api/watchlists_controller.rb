class Api::WatchlistsController < ApplicationController
    before_action :require_logged_in

    def index
        @watchlists = Watchlist.where("user_id = #{current_user.id}")
        render :index
    end

    def create
    end
    
    def destroy
    end
end
