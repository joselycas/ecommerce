class ApplicationController < ActionController::API
  # skip_before_action :verify_authenticity_token
  # include ::ActionController::Cookies

   def find_current_user
    code = JWT.decode(request.headers[:auth], Rails.application.secrets.secret_key_base)
    # acess id from decoded object
    user_id = code[0]["id"]
    User.find_by(id: user_id)
   end

   def logged_in?
     !!find_current_user
   end

end
