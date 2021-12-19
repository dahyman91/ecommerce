class Product < ApplicationRecord
  has_many :product_instances

  validates_uniqueness_of(:name)
end
