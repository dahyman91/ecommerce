class ProductsController < ApplicationController

  def show
    product = Product.find(params[:id])
    render json: product, status: :ok
  end

  def index
    render json: Product.all, status: :ok
  end
end
