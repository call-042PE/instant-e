class PagesController < ApplicationController
  def home
    @categories = Category.all
    if params[:category]
      @posts = Post.where("category_id = '#{params[:category]}'").order(created_at: :desc)
    else
      @posts = Post.all.order(created_at: :desc)
    end
  end
end
