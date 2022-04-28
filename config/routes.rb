Rails.application.routes.draw do
  get 'pages/index'
  get 'pages/show'
  get 'pages/new'
  resources :pages
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
