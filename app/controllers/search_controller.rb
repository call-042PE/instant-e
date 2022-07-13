class SearchController < ApplicationController
  def index
    if params[:search]
      @posts = Post.where("title LIKE '%#{params[:search]}%'")
      @users = User.where("username LIKE '%#{params[:search]}%'")
    end
  end
end
