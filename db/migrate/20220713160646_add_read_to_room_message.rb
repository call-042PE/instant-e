class AddReadToRoomMessage < ActiveRecord::Migration[6.1]
  def change
    add_column :room_messages, :read, :boolean, default: false
  end
end
