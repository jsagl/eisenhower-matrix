Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :matrices, only: [:index, :create, :update, :destroy] do
        resources :tasks, only: [:index, :create, :update, :destroy]
        resources :categories, only: [:index, :create, :update]
      end
    end
  end

  resources :wakers, only: [:index]
  resources :matrices, only: [:show]
  root to: 'matrices#show'
end
