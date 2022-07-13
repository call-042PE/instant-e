# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Room.destroy_all
RoomUser.destroy_all
RoomMessage.destroy_all
Category.destroy_all

Category.create!(name: "Informatique")
user = User.create!(email: "test@gmail.com", password: "dontssme", password_confirmation: "dontssme", username:"test")
user2 = User.create!(email: "test2@gmail.com", password: "dontssme", password_confirmation: "dontssme", username:"test2")
room = Room.create!(name: "Test")
RoomUser.create!(user: user, room: room)
RoomUser.create!(user: user2, room: room)
RoomMessage.create!(content: "test", user: user, room: room)
