class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.references :product, foreign_key:true
      t.references :user, foreign_key:true
      t.integer :quantity
      t.decimal :sub_total

      t.timestamps
    end
  end
end
