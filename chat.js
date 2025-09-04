const chat = document.getElementById("chat");
const input = document.getElementById("input");
const send = document.getElementById("send");

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

function assistantResponse(userMsg) {
  if (userMsg.toLowerCase().includes("hello")) {
    return "Hi there! How can I help you today?";
  }
  if (userMsg.toLowerCase().includes("time")) {
    return "The current time is " + new Date().toLocaleTimeString();
  }
  return "Hi! :)";
}

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  setTimeout(() => {
    const response = assistantResponse(text);
    addMessage(response, "bot");
  }, 400);
}

send.addEventListener("click", sendMessage);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});
