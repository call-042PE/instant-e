import {updateMessages} from "./room";

document.addEventListener("turbolinks:load", () => {
  setInterval(() => {
    updateMessages();
  }, 1000);
})
