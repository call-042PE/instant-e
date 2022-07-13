class RoomsController < ApplicationController
  before_action :authenticate_user!
  def index
  end
  def new
  end
  def create
  end
  def show
    begin
      @room_name = Room.find(params[:id]).name
      @room_users = RoomUser.where("room_id = '#{params[:id]}'")
      @room_messages = RoomMessage.where("room_id = '#{params[:id]}'")
    rescue => e
    end
  end
end
