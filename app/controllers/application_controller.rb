class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorized

  def authorized
    return render json: { error: 'Not Authorized' }, status: :unauthorized unless session.include? :user_id
  end
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_record_response

  private

  def render_not_found_response
    render json: { error: 'not found' }, status: :not_found
  end

  def invalid_record_response(invalid)
    render json: { error: invalid.record.errors }, status: :unprocessable_entity
  end
end
