class ProductSerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :category,
             :price,
             :description,
             :primary_image,
             :secondary_image
end
