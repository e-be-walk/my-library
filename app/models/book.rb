class Book < ApplicationRecord
  belongs_to :user, optional: :true
  #belongs_to :book_club
  #has_many :up_votes

  #JSON_KEYS = %w{title authors description}
  #def as_json(opts = {})
  #  super.tap
  #  end.slice(*JSON_KEYS)
  #end
end
