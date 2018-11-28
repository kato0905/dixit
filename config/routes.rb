Rails.application.routes.draw do
  resources :players

  root 'players#index'

  get "individual/teller"
  post "individual/teller"

  get "individual/other"
  post "individual/other"

  get "individual/confirm"
  post "individual/confirm"

  get "result/result"
  post "result/result"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
