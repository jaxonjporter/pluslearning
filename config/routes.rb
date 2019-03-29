Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'


  namespace :api do
    resources :friendships, only: [:index, :create, :destroy]
    get 'all_friendships', to: 'friendships#all_friendships'
  end
end
