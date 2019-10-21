Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  post "/api/v1/login", to: "api/v1/sessions#create"

  namespace :api do
   namespace :v1 do
     resources :users
     resources :products
   end
 end
end
