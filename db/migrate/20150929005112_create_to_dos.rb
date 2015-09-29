class CreateToDos < ActiveRecord::Migration
  def change
    create_table :to_dos do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.text :description
      t.boolean :completed, default: false

      t.timestamps null: false
    end
  end
end
