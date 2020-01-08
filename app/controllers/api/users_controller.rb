class Api::UsersController < ApplicationController
    def create
      @user = User.new(user_params)
      if @user.save
        login(@user)
        render json: @user
      else
        render json: @user.errors.full_messages, status: 401
      end
    end
    
    def update
      @user = selected_user
      if @user && @user.update_attributes(user_params)
        render :show
      elsif !@user
        render json: ['Could not locate user'], status: 400
      else
        render json: @user.errors.full_messages, status: 401
      end
    end
    
    
    private
    def selected_user
      User.find_by(id: params[:id])
    end
    
    def user_params
      params.require(:user).permit(:email, :password)
    end
  end