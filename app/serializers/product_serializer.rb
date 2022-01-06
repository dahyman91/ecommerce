class ProductSerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :category,
             :price,
             :description,
             :primary_image,
             :secondary_image,
             :average_review
  has_many :reviews


  def average_review
    if object.reviews.length.zero?
      0
    else
      object.reviews.sum(:rating) / object.reviews.length
    end
  end
end

