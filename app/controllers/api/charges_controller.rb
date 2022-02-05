class Api::ChargesController < ApplicationController
  Stripe.api_key =
    'sk_test_51KO3LrKp7Mm0L1BeReQ19mk6r7273COytsTZ2ePr9dYhyCcXj31ap6lgkIcmkmPeoRX4N3nng59DGypv3fHQTazv0067rKdstp'
  def create
    user = User.find(session[:user_id])
    customer =
      Stripe::Customer.create(
        {
          description: "#{user.first_name} #{user.last_name}",
          email: params[:email],
          source: params[:token],
        },
      )
    charge =
      Stripe::Charge.create(
        { customer: customer.id, amount: params[:amount], currency: 'usd' },
      )
    render json: charge
  end

  private

  def charge_params
    params.permit(:token, :email, :amount)
  end
end
