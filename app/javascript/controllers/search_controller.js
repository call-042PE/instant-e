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
          this.personTarget.insertAdjacentHTML("beforeend",`
          <div class="add-contact">
          <h4>${element.username}</h4>
          <i class="fa-solid fa-plus" data-action="click->search#add_contact"></i>
        </div>
          `);
        });
      })
    }
  }

  add_contact(info) {
    const contactName = info.path[1].innerText // get the above div to retreive the contact name
    this.adddivTarget.insertAdjacentHTML("beforeend", `
    <div class="contact">
    <h4>${contactName}</h4>
    <i class="fa-solid fa-xmark" data-action="click->search#remove_contact"></i>
  </div>`);
    this.contactinputTarget.value += `${contactName},`;
  }

  remove_contact(info) {
    const contact = info.path[1] // get the above div to retreive the contact name
    contact.remove();
  }
}
