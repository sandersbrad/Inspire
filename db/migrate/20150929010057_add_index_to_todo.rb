class AddIndexToTodo < ActiveRecord::Migration
  def change
    add_index :to_dos, :user_id, name: "index_todos_on_user_id", using: :btree
  end
end
