class Api::V1::UsersController < ApplicationController

  def index
    product = Product.all
    render json: product
  end

end
