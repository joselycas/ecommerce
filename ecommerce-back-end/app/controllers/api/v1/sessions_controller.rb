class Api::V1::SessionsController < ApplicationController

def create
  user = User.find(params[:user_id])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to root_path, notice:
      "Welcome #{user_id}, you've successfully signed in"
    else
      flash[:alert] = "no user found"
    end
  end
end
