import {updateMessages} from "./room";
import {check_unread_messages} from "./room";

document.addEventListener("turbolinks:load", () => {
  setInterval(() => {
    updateMessages();
  }, 1000);

  setInterval(() => {
    check_unread_messages();
  }, 1000);
})
