class Api::V1::UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def create

    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      render json: {
        user_id: @user.id,
        user_name: @user.name,
        user_email: @user.email,
        jwt: encode_token({id:@user.id})}
    else
      render json: {error: "Please fill out all sections."}
    end
  end


  private
  def user_params
    params.require(:user).permit(:name, :email, :password)
  end

  def encode_token(payload={})
    exp=24.hours.from_now
    payload[:exp]=exp.to_i
    JWT.encode(payload, Rails.application.secrets.secret_key_base)
  end

end
