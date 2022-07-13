Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  get "/users/posts", to: "posts#user_posts"
  get "rooms/", to: "rooms#index"
  get "/rooms/new", to: "rooms#new"
  post "/rooms/new", to: "rooms#create"
  post "/rooms/", to: "rooms#create"
  get "/rooms/:id", to: "rooms#show"
  get "posts/new", to: "posts#new"
  post "/posts", to: "posts#create"
  get "/posts", to: "posts#index"
  get "/post/:id/delete", to: "posts#delete"
  get "/post/:id/edit", to: "posts#edit"
  post "/post/:id/edit", to: "posts#update"
  get "/search", to: "search#index"
  get "/api/search", to: "api#person"
  get "/api/messages", to: "api#message"
  get "/api/addmessage", to: "api#add_message"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
