class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :password_digest, :cart_count
  has_many :product_instances
  has_many :reviews

  def cart_count
    object.product_instances.sum(:quantity)
  end
end
