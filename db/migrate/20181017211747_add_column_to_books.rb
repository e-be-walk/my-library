class AddColumnToBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :user_id, :integer
    add_column :books, :book_club_id, :integer
  end
end
