class CreateProductInstances < ActiveRecord::Migration[6.1]
  def change
    create_table :product_instances do |t|
      t.integer :user_id
      t.integer :product_id
      t.integer :quantity

      t.timestamps
    end
  end
end
