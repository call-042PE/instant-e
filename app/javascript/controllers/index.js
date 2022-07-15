// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import PostController from "./post_controller"
import SearchController from "./search_controller"
import RoomController from "./room_controller"
import MenuController from "./menu_controller"
application.register("post", PostController)
application.register("search", SearchController)
application.register("room", RoomController)
application.register("menu", MenuController)
