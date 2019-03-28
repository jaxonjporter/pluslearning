class Api::FriendshipsController < ApplicationController
  def create
    @friendship = current_user.friendships.build(:friend_id => params[:friend_id])
    if @friendship.save
      render json: @friendship
    else
      binding.pry
    end
    
  end

  def destroy
    @friendship = Friendship.find(params[:id])
    @friendship.destroy
    render json: { message: 'Item deleted' }
  end
end
