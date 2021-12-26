Rails.application.routes.draw do
  resources :users, only: %i[show create index]
  resources :products
  post '/login', to: 'sessions#create'
  get '/auth', to: 'users#show'
  get '/me', to: 'users#show'
end
