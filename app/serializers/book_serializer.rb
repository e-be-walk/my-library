class BookSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :book_club_id, :title, :authors, :description, :link
end
