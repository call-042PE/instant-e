import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["content", "room"]

  submit(event) {
    event.preventDefault();
    fetch(`/api/addmessage?room_id=${this.roomTarget.value}&message=${this.contentTarget.value}`);
    this.contentTarget.value = "";
  }

}
