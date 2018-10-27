class SessionsController < ApplicationController

  def index
  end

  def create
    @user = User.find_by(email: user_params[:email])
    if @user && @user.authenticate(user_params[:password])
      render status: 200, json: @user.to_json
    end
  end

  def destroy
    session.clear
  end

  private

  #def current_user
  #  @user = User.find(params[:id])
  #end

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
