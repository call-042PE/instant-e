import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["postid"]

  delete() {
    fetch(`/post/${this.postidTarget.value}/delete`);
    window.location.reload();
  }

}
