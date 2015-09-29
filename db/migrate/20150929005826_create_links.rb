class CreateLinks < ActiveRecord::Migration
  def change
    create_table :links do |t|
      t.integer :user_id, null: false, index: true
      t.text :url, null: false
      t.string :title
      
      t.timestamps null: false
    end
  end
end
