class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :price
      t.string :category
      t.text :description
      t.string :primary_image
      t.string :secondary_image

      t.timestamps
    end
  end
end
