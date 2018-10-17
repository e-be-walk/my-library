class BookClubSerializer < ActiveModel::Serializer
  attributes :id, :name, :upvote, :book_id
end
