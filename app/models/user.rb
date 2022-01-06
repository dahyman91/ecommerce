class User < ApplicationRecord
  has_secure_password
  has_many :product_instances
  has_many :reviews
end
