class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_record_response

  private

  def render_not_found_response
    render json: { error: 'error not found' }, status: :not_found
  end

  def invalid_record_response
    render json: { error: 'invalid params' }, status: :unprocessable_entity
  end
end
