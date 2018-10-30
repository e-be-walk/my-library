Rails.application.routes.draw do
  resources :up_votes
  resources :book_clubs


  resources :users do
    resources :books
  end

  resources :books, only: :destroy

  resources :sessions
  #resources :books
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
