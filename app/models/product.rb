class Product < ApplicationRecord
  has_many :product_instances
  has_many :reviews

  validates_uniqueness_of(:name)
end
