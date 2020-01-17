Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :matrices do
        resources :tasks, only: [:index, :create, :update, :destroy]
        resources :categories, only: [:index, :create, :update, :destroy]
      end
    end
  end

  resources :matrices, only: [:show]
  root to: 'matrices#show'
end
