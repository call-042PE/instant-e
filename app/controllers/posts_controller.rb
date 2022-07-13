class PostsController < ApplicationController

  def index
    @posts = Post.find(params[:id])
  end

  def edit
    @post = Post.find(params[:id])
    @categories = Category.all
  end

  def update
    post = Post.find(params[:id])
    post.title = params[:title]
    post.content = params[:content]
    post.category = Category.where("name = '#{params[:category]}'")[0]
    redirect_to "/users/posts" if post.save
  end

  def create
    post = Post.new(post_params)
    post.user = current_user
    post.category = Category.where("name = '#{params[:category]}'")[0]
    redirect_to "/" if post.save
  end

  def user_posts
    @posts = Post.where("user_id = '#{current_user.id}'")
  end

  def new
    @post = Post.new
    @categories = Category.all
  end

  def delete
    post = Post.find(params[:id])
    if post.user.id == current_user.id
      post.destroy
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :content, :category)
  end
end
