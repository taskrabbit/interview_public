cd ./login_form
yarn install
cd ../rails_challenge
rvm install 2.5.5
rvm use 2.5.5
bundle install
bundle exec rake db:setup