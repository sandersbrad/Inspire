class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.integer :user_id, null: false, index: true
      t.text :url, null: false
      t.text :thumb_url
      t.string :description
      t.string :author

      t.timestamps null: false
    end
  end
end
