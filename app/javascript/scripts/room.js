var loadOnce = false;
export const updateMessages = () => {
  const messages_div = document.querySelector(".messages");
  if (messages_div != null) {
    if(loadOnce == false) {
      fetch(`/api/messages?room_id=${document.querySelector("#room_id").value}`)
      .then(response => response.json())
      .then((data) => {
        data.forEach(element => {
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
          messages_div.insertAdjacentHTML("beforeend", `<h1>${element.content}</h1>`)
        }
      });
    }
  }
}
