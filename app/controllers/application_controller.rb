class ApplicationController < ActionController::API
  before_action :logged_in?, except: [:new, :create, :about, :index, :show]
  before_action :current_user, except: [:new, :create, :about, :index, :show]
  helper_method :current_user

  def logged_in?
    !!current_user
  end

  def current_user
    if session[:current_user]
      @current_user ||= User.find(session[:current_user])
    else
      nil
    end
  end

end
