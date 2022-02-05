class Api::ReviewsController < ApplicationController
  def create
    user = User.find_by(id: session[:user_id])
    existing_review = user.reviews.find_by(product_id: params[:product_id])
    if existing_review
      review = existing_review.update!(rating: review_params[:rating])
    else
      review = user.reviews.create!(review_params)
    end
    render json: review, status: :created
  end

  private

  def review_params
    params.permit(:product_id, :rating, :content)
  end
end
