
Dockerfile
```bash
FROM ruby:2.5.0
RUN curl -sL https://deb.nodesource.com/setup_9.x | bash -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN apt-get update
RUN apt-get install -y nodejs yarn
ENV BUNDLE_PATH /tailung/.gems
ENV GEM_HOME /tailung/.gems
```

docker-compose.yml
```bash
version: '2'
services:
  web:
    working_dir: /tailung
    build: .
    volumes:
      - "./:/tailung"
    command: "bin/rails s puma -b '0.0.0.0' -p 3000"
    ports:
      - "3000:3000"
    depends_on:
      - database_tailung
    links:
      - database_tailung:database_tailung
  database_tailung:
    image: postgres
    volumes:
      - ./.data/postgres:/var/lib/postgresql/data
```

```bash
sudo docker-compose build web
sudo docker-compose run web gem install rails -v '5.1.5'
sudo docker-compose run web gem install bundler
git init .
echo ".gems" >> .gitignore
echo ".data" >> .gitignore
sudo docker-compose run web .gems/bin/rails new . --skip-bundle --skip-coffee --webpack=react --skip-turbolinks  --database=postgresql --skip-test --skip-git --skip-javascript --skip-system-test
sudo chown -R <user>:<group> .
```

Gemfile
```bash
source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.1.5'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 3.7'
gem 'sass-rails', '~> 5.0'
gem 'webpacker'
gem 'react-rails'

# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
```

```bash
sudo docker-compose run web bundle
echo "log" >> .gitignore
echo "tmp" >> .gitignore

sudo docker-compose run web bin/rake webpacker:install
sudo docker-compose run web bin/rake webpacker:install:react
sudo rm app/javascript/packs/hello_react.jsx
sudo docker-compose run web bin/rake webpacker:install:erb
sudo rm app/javascript/packs/hello_erb.js.erb
sudo docker-compose run web bin/rails g react:install
sudo chown -R julian:julian .
echo "> 1%" >> .browerslistrc
```

config/application.rb
```bash
require_relative 'boot'

require "rails"
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
require "action_cable/engine"
require "sprockets/railtie"
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Tailung
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Don't generate system test files.
    config.generators.system_tests = nil
    config.generators do |g|
      g.test_framework false
      g.stylesheets false
      g.javascripts false
      g.helper false
      g.channel assets: false
    end
  end
end
```

```bash
rm -fr app/helpers/
echo "app/helpers" >> .gitignore
```

config/database.yml
```bash
default: &default
  adapter: postgresql
  encoding: unicode
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
  host: database_tailung
  username: postgres
  password:

development:
  <<: *default
  database: tailung_development

test:
  <<: *default
  database: tailung_test
```

app/views/layouts/application.html.erb
```bash
<!DOCTYPE html>
<html>
  <head>
    <title>Tailung</title>
    <%= csrf_meta_tags %>

    <%= stylesheet_pack_tag    'application' %>
  </head>

  <body>
    <%= yield %>
    <%= javascript_pack_tag 'application' %>
  </body>
</html>
```

Setting up test frameworks

Edit the Gemfile and add:
```bash
group :development, :test do
  gem 'rspec-rails'
end

group :test do
  gem 'cucumber-rails', require: false
  gem 'database_cleaner'
end
```


Resources

https://www.youtube.com/watch?v=KtoHlJVq8io

https://github.com/reactjs/react-rails

https://github.com/rails/webpacker

https://evilmartians.com/chronicles/evil-front-part-1

https://github.com/rspec/rspec-rails
