Rails.application.routes.draw do
  namespace :api do
    resources :users, only: %i[show create index]
    resources :products
    resources :product_instances
    post '/login', to: 'sessions#create'
    get '/auth', to: 'users#show'
    get '/me', to: 'users#show'
    delete '/logout', to: 'sessions#destroy'
    post '/signup', to: 'users#create'
  end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
