class Api::ReviewsController < ApplicationController

  def create
    review = Review.create!(review_params)
    render json: review, status: :created
  end

  

  private

  def review_params
    params.permit(:user_id, :product_id, :rating, :content)
  end

end
