class Api::ProductsController < ApplicationController
  # skip_before_action :authorized, only: %i[show]
  
  def show
    product = Product.find(params[:id])
    render json: product, status: :ok
  end



  def index
    render json: Product.all, status: :ok
  end

end
