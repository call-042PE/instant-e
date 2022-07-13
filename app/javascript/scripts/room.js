var loadOnce = false;
export const updateMessages = () => {
  const messages_div = document.querySelector(".messages");
  if (messages_div != null) {
    if(loadOnce == false) {
      fetch(`/api/messages?room_id=${document.querySelector("#room_id").value}`)
      .then(response => response.json())
      .then((data) => {
        data.forEach(element => {
            fetch(`/api/readmessage?message_id=${element.id}`);
            messages_div.insertAdjacentHTML("beforeend", `<h1>${element.content}</h1>`)
          });
      })
      loadOnce = true;
    }
    else {
      fetch(`/api/messages?room_id=${document.querySelector("#room_id").value}`)
      .then(response => response.json())
      .then((data) => {
        const element = data[data.length - 1];
        if(element.content != messages_div.lastChild.innerText) {
          fetch(`/api/readmessage?message_id=${element.id}`);
          messages_div.insertAdjacentHTML("beforeend", `<h1>${element.content}</h1>`)
        }
      });
    }
  }
}

var once = false;
export const check_unread_messages = () => {
  if(once == false)
  {
    fetch(`/api/unread`)
    .then(response => response.json())
    .then((data) => {
      if(parseInt(data) > 0) {
        document.body.insertAdjacentHTML("beforeend", `
        <div class="alert alert-info alert-dismissible fade show" role="alert">
    You have unread message(s)
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
        `)
        once = true;
      }
    })
  }
}
