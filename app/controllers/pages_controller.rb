class PagesController < ApplicationController
  
  def home
    @title='Hello Conchito home'
  end

  def landing
    @title='Hello Conchito landing'
    
    #user = User.authenticate(params[:session][:email],params[:session][:password])
    if signed_in?
      redirect_to home_path
    end
    
  end
  
  def about
    @title='Hello Conchito about'
  end

end
