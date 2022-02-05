class Api::ProductInstancesController < ApplicationController
  def create
    user = User.find_by(id: session[:user_id])
    product = user.product_instances.find_by(product_id: params[:product_id])

    if product
      product_instance = product.update!(quantity: product.quantity + 1)
    else
      product_instance = user.product_instances.create!(product_params)
    end
    render json: product_instance, status: :accepted
  end

  def update
    user = User.find_by(id: session[:user_id])
    product = user.product_instances.find_by(product_id: params[:product_id])
    if product.quantity == 1
      product.destroy
    elsif product.quantity >= 2
      product_instance = product.update!(quantity: product.quantity - 1)
    end
    render json: product_instance, status: :accepted
  end

  # def update
  #   product_instance = ProductInstance.find_by(id: params[:id])
  #   product_instance.update!(product_params)
  #   render json: product_instance, status: :accepted
  # end

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
    params.permit(:product_id, :quantity)
  end
end
