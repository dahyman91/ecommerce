class Review < ApplicationRecord
  has_one :user
  has_one :product
end
