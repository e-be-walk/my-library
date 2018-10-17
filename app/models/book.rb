class Book < ApplicationRecord
  belongs_to :user
  belongs_to :book_club
  has_many :up_votes

end
