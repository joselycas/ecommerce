# # Access-Control-Allow-Origin: https://localhost:3001
# Rails.application.config.middleware.insert_before 0, Rack::Cors do
#   allow do
#     origins 'http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002'
#
#     resource '*',
#       headers: Access-Control-Allow-Origin: https://localhost:3001,
#       methods: [:get, :post, :put, :patch, :delete, :options, :head],
#       credentials: true
#   end
# end
#
