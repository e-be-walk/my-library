class UpVoteSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :site_id
end
