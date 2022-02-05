class User < ApplicationRecord
  has_secure_password
  has_many :product_instances
  has_many :reviews

  validates :first_name, :last_name, :password, presence: true
  validates :email, presence: true
  validates :email, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
end
