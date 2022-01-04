class Api::ProductInstancesController < ApplicationController
  def create
    product_instance = ProductInstance.create(product_params)
    render json: product_instance, status: :created
  end

  def index
    render json: ProductInstance.all
  end

  def destroy
    product_instance = ProductInstance.find_by(id: params[:id])
    product_instance.destroy
    head :no_content
  end

  private

  def product_params
    params.permit(:user_id, :product_id, :quantity)
  end
end
