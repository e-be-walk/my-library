class CreateBookClubs < ActiveRecord::Migration[5.2]
  def change
    create_table :book_clubs do |t|
      t.string :name
      t.integer :up_vote_id
      t.integer :book_id

      t.timestamps
    end
  end
end
