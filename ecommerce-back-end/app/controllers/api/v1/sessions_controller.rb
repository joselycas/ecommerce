class Api::V1::SessionsController < ApplicationController

def create
  @user = User.find(params[:user_id])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      render json: @user
    else
      render json: {error: "please fill out all sections"}
    end
  end
end
