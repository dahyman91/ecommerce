class Api::ProductInstancesController < ApplicationController

  def create
    user = User.find_by(id: product_params[:user_id])
    product = user.product_instances.find_by(product_id: params[:product_id])
    if product
      product_instance = product.update!(quantity: product.quantity + 1)
    else
      product_instance = ProductInstance.create!(product_params)
    end
    render json: product_instance, status: :accepted
  end

  def update
    product_instance = ProductInstance.find_by(id: params[:id])
    product_instance.update!(product_params)
    render json: product_instance, status: :accepted
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
