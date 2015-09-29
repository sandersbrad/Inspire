Rails.application.routes.draw do

  devise_for :users

  root to: "static_pages#index"

  resources :static_pages, only: :show
end
