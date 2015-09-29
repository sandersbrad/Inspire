class StaticPagesController < ApplicationController
  def index
    redirect_to static_page_url(current_user.id) if user_signed_in?
  end

  def show
  end
end
