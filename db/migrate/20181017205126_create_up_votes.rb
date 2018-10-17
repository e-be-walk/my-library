class CreateUpVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :up_votes do |t|
      t.integer :user_id
      t.integer :site_id

      t.timestamps
    end
  end
end
