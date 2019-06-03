Rails.application.routes.draw do
  get 'customers/index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "dashboard#index"
  resources :customers, only: [:index]
end
