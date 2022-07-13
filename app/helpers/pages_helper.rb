module PagesHelper
  def get_unread_messages
    @rooms = RoomUser.where("user_id = '#{current_user.id}'")
    @rooms.each do |room|
      @unread_messages = RoomMessage.where("room_id = '#{room.room.id}' AND read = false").count
      return @unread_messages
    end
  end
end
