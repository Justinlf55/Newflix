Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :movies, only: [:index, :show]
    resources :genres, only: [:index, :show]
    resources :watchlists, only: [:index, :create, :destroy]
    resources :movie_genres, only: [:create]
  end

  root to: 'static_pages#root'
end
