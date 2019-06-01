# README

Start Postgres via Homebrew:

* To start manually:
pg_ctl -D /usr/local/var/postgres start
* To stop manually:
pg_ctl -D /usr/local/var/postgres stop
* To start PostgreSQL server now and relaunch at login:
brew services start postgresql
* And stop PostgreSQL:
brew services stop postgresql

Deployment commands via 'foreman':
  * foreman check                   # Validate your application's Procfile
  * foreman export FORMAT LOCATION  # Export the application to another process management format
  * foreman help [COMMAND]          # Describe available commands or one specific command
  * foreman run COMMAND [ARGS...]   # Run a command using your application's environment
  * foreman start [PROCESS]         # Start the application (or a specific PROCESS)
  * foreman version                 # Display Foreman gem version

Options:
  * -f, [--procfile=PROCFILE]  # Default: Procfile
  * -d, [--root=ROOT]          # Default: Procfile directory

