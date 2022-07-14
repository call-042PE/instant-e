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
            fetch(`/api/userinfo?id=${element.user_id}`)
            .then(response => response.json())
            .then((data) => {
              if(document.querySelector("#username").value != data.username) {
                messages_div.insertAdjacentHTML("beforeend", `
                <div style="display: flex; justify-content: start;">
                <h4 class="othermessages">${data.username}
                <br>${element.content}</h4>
              </div>
                `)
              }
              else {
                messages_div.insertAdjacentHTML("beforeend", `
                <div style="display: flex; justify-content: end;">
                  <h4 class="mymessages">${element.content}</h4>
                </div>
                `)
              }
            })
          });
      })
      loadOnce = true;
    }
    else {
      fetch(`/api/messages?room_id=${document.querySelector("#room_id").value}`)
      .then(response => response.json())
      .then((data) => {
        const element = data[data.length - 1];
        if(messages_div.childNodes[messages_div.childNodes.length - 2].innerText.includes(element.content) == false) {
          fetch(`/api/readmessage?message_id=${element.id}`);
          fetch(`/api/userinfo?id=${element.user_id}`)
          .then(response => response.json())
          .then((data) => {
            if(document.querySelector("#username").value != data.username) {
              messages_div.insertAdjacentHTML("beforeend", `
              <div style="display: flex; justify-content: start;">
              <h4 class="othermessages">${data.username}
              <br>${element.content}</h4>
            </div>
              `)
            }
            else {
              messages_div.insertAdjacentHTML("beforeend", `
              <div style="display: flex; justify-content: end;">
                <h4 class="mymessages">${element.content}</h4>
              </div>
              `)
            }
          })
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
    Vous avez des messages non-lu.
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
