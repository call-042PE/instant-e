import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["contact", "person", "adddiv", "contactinput"];

  search() {
    if(this.contactTarget.value == "") {
      this.personTarget.innerHTML = "";
    }
    else {
      this.personTarget.innerHTML = ""; // clear all previous username
      fetch(`/api/search?person=${this.contactTarget.value}`)
      .then(response => response.json())
      .then((data) => {
        data.forEach(element => {
          this.personTarget.insertAdjacentHTML("beforeend",`<div>
          <h2>${element.username}</h2>
          <i class="fa-solid fa-plus" data-action="click->search#add_contact"></i>
          </div>`);
        });
      })
    }
  }

  add_contact(info) {
    const contactName = info.path[1].innerText // get the above div to retreive the contact name
    this.adddivTarget.insertAdjacentHTML("beforeend", `<div>
    <h2>${contactName}</h2>
    <i class="fa-solid fa-xmark" data-action="click->search#remove_contact"></i>
    </div>`);
    this.contactinputTarget.value += `${contactName},`;
  }

  remove_contact(info) {
    const contact = info.path[1] // get the above div to retreive the contact name
    contact.innerHTML = "";
  }
}
