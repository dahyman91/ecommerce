class UsersController < ApplicationController

  def show
    current_user = User.find(session[:id])
    render json: current_user
  end
  
  def index
    render json: User.all
  end

  def create
    user = User.create!(user_params)
    render json: user, status: :created
  end

  private

  def user_params
    params.permit(:email, :password, :first_name, :last_name, :user)
  end
end
