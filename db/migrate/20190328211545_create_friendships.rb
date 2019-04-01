class CreateFriendships < ActiveRecord::Migration[5.2]
  def change
    create_table :friendships do |t|
      t.belongs_to :friend, class_name: 'User'
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
