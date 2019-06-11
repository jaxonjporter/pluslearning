class Api::FriendshipsController < ApplicationController


  def index
    @users = User.all_users
    render json: @users
  end

  def all_friendships
    @friends = current_user.friends
    render json: @friends
  end
  
  def create
    @friendship = current_user.friendships.build(:friend_id => params[:friend_id])
    if @friendship.save
      render json: @friendship
    else
    end
    
  end

  def destroy
    @friendship = Friendship.find(params[:id])
    @friendship.destroy
    render json: { message: 'Item deleted' }
  end

  private


  def friendship_params
    params.require(:friendship).permit(:user_id, :friend_id)
  end
end
