class BookClub < ApplicationRecord
  has_many :books
  has_many :users, through :up_votes
end
