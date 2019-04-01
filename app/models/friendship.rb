class Friendship < ApplicationRecord
  belongs_to :user
  belongs_to :friend, class_name: "User"

  def self.all_friends(id)
    Friendship.find_by_sql(["
      SELECT * 
      FROM friendships AS f
      WHERE f.user_id = ?
    ", id])
  end
end
