class AddNameToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :name, :string, unique: true, null: false
    add_index :users, :name
  end
end