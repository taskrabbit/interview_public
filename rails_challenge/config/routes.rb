Rails.application.routes.draw do
  root 'url_shortener#home'
  post 'url_shortener/convert', to: 'url_shortener#convert'
end
