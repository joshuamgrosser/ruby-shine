# README

## Shine Sample Application ##
Shine is an internal customer service application that allows agents to search, view, and manipulate customer data.
It is a sample app based on the examples in the book from "Rails, Angular, Postgres, and Bootstrap" by David Copeland, 2nd Edition.
https://www.amazon.com/Rails-Angular-Postgres-Bootstrap-Development/dp/1680502204/ref=dp_ob_title_bk

### Postgres ###
Installation: brew install postgres
* To start PostgreSQL server and relaunch at login: brew services start postgresql
* And stop PostgreSQL: brew services stop postgresql

To create and seed the database:
* `createuser --createdb --login -P shine`
* `bundle exec rails db:create`
* `bundle exec rails db:migrate` 
* `bundle exec rails db:seed`
* `RAILS_ENV='test' bundle exec rails db:seed`

### Foreman ###
Installation: gem install foreman
* foreman check                   # Validate your application's Procfile
* foreman export FORMAT LOCATION  # Export the application to another process management format
* foreman help [COMMAND]          # Describe available commands or one specific command
* foreman run COMMAND [ARGS...]   # Run a command using your application's environment
* foreman start [PROCESS]         # Start the application (or a specific PROCESS)
* foreman version                 # Display Foreman gem version
