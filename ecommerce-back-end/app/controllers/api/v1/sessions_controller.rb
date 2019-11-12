class Api::V1::SessionsController < ApplicationController

def create
  @user = User.find_by(email: user_params[:email])
    if @user && @user.authenticate(user_params[:password])
      session[:user_id] = @user.id
       # render json: @user
      render json: {
        user_id: @user.id,
        user_name: @user.name,
        user_email: @user.email,
        jwt: encode_token({id:@user.id})}
    else
      render json: {error: "Email or password incorrect. Please try again."}
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

   def encode_token(payload={})
     exp=24.hours.from_now
     payload[:exp]=exp.to_i
     JWT.encode(payload, Rails.application.secrets.secret_key_base)
   end
end
