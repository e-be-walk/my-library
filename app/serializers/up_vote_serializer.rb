class UpVoteSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :book_id
end
