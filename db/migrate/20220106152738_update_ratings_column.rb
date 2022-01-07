class UpdateRatingsColumn < ActiveRecord::Migration[6.1]
  def change
  change_column :reviews, :rating, :float
  #Ex:- change_column("admin_users", "email", :string, :limit =>25)  
  end
end
