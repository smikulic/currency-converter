Rails.application.routes.draw do
  root to: 'home#index'
  
  get 'home/calculate_exchange'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
