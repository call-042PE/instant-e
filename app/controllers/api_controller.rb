class ApiController < ApplicationController
  def person
    @users = User.where("username LIKE '%#{params[:person]}%'")
    render :json => @users
  end

  def message
    if params[:room_id]
      @rooms_user = RoomUser.where("room_id = '#{params[:room_id]}'")
      @rooms_user.each do |room_user|
        if room_user.user.id == current_user.id
          @messages = RoomMessage.where("room_id = '#{params[:room_id]}'")
          render :json => @messages
          return
        end
      end
      render :json => "[]"
    end
  end

  def add_message
    if params[:room_id] && params[:message]
      @rooms_user = RoomUser.where("room_id = '#{params[:room_id]}'")
      @rooms_user.each do |room_user|
        if room_user.user.id == current_user.id
          RoomMessage.create!(room: Room.find(params[:room_id]), content: params[:message], user: current_user)
        end
      end
    end
  end

  def read_message
    if params[:message_id]
      @message = RoomMessage.find(params[:message_id])
      if @message.user.id != current_user.id
        @message.read = true
        @message.save
      end
    end
  end

  def number_of_unread_messages
    if params[:room_id]
      @unread_messages = RoomMessage.where("room_id = '#{params[:room_id]}' AND read = false").count
      render :json => @unread_messages
    end
  end

  def has_unread_message
    @rooms = RoomUser.where("user_id = '#{current_user.id}'")
    @rooms.each do |room|
      @unread_messages = RoomMessage.where("room_id = '#{room.room.id}' AND read = false").count
      render :json => @unread_messages
    end
  end
end
