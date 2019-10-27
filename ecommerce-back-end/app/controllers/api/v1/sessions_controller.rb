class Api::V1::SessionsController < ApplicationController

def create
  @user = User.find_by(email: user_params[:email])
    if @user && @user.authenticate(user_params[:password])
      session[:user_id] = @user.id
      render json: @user
    else
      render json: {error: "please fill out all sections"}
    end
  end

  def current_user
    if logged_in?
      user = find_current_user
      render json: user
    else
      render json: {
        error: "No one logged in"
      }
    end
  end

    def destroy
     session[:user_id] = nil
   end

   private
   def user_params
     params.require(:user).permit(:email, :password)
   end
end
