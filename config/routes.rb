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
  get "/posts/:id", to: "posts#show"
  get "/post/:id/delete", to: "posts#delete"
  get "/post/:id/edit", to: "posts#edit"
  post "/post/:id/edit", to: "posts#update"
  get "/search", to: "search#index"
  get "/api/search", to: "api#person"
  get "/api/messages", to: "api#message"
  get "/api/addmessage", to: "api#add_message"
  get "/api/readmessage", to: "api#read_message"
  get "/api/countunreadmessage", to: "api#number_of_unread_messages"
  get "/api/unread", to: "api#has_unread_message"
  get "/api/userinfo", to: "api#user_info"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
