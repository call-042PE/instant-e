class RoomsController < ApplicationController
  before_action :authenticate_user!
  def index
  end

  def new
  end

  def create
    @room = Room.new(room_params)
    if @room.save
      @users = params[:person].split(",")
      @users.each do |user|
        RoomUser.create!(user: User.where("username = '#{user}'")[0], room: @room)
      end
      redirect_to "/rooms/#{@room.id}"
    end
  end

  def show
    begin
      @room_name = Room.find(params[:id]).name
      @room_users = RoomUser.where("room_id = '#{params[:id]}'")
      @room_messages = RoomMessage.where("room_id = '#{params[:id]}'")
    rescue => e
    end
  end

  private

  def room_params
    params.require(:room).permit(:name)
  end
end
