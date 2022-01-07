class Api::ReviewsController < ApplicationController

  def create
    user = User.find_by(id: review_params[:user_id])
    existing_review = user.reviews.find_by(product_id: params[:product_id])
    if existing_review
      review = existing_review.update!(rating: review_params[:rating])
    else
      review = Review.create!(review_params)
    end
    render json: review, status: :created
  end

  private

  def review_params
    params.permit(:user_id, :product_id, :rating, :content)
  end

end
