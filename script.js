const socket = io();

const input = document.getElementById("message-input");
const messages = document.getElementById("messages");
const sendBtn = document.getElementById("send-button");

sendBtn.addEventListener("click", () => {
  const msg = input.value;
  if (msg.trim() !== "") {
    socket.emit("chat message", msg);
    input.value = "";
  }
});

socket.on("chat message", (msg) => {
  const div = document.createElement("div");
  div.textContent = msg;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
});
