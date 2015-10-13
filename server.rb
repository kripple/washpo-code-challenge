require 'sinatra'
require 'heroku'

get '/' do
  send_file "index.html"
end
