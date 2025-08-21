const toggleBtn = document.getElementById("chatToggle");
const chatWindow = document.getElementById("chatWindow");
const chatInput = document.getElementById("chatInput");
const chatContent = document.getElementById("chatContent");

toggleBtn.addEventListener("click", () => {
  chatWindow.classList.toggle("hidden");
});

chatInput.addEventListener("keypress", e => {
  if (e.key === "Enter" && chatInput.value.trim()) {
    let userMsg = document.createElement("p");
    userMsg.innerHTML = `<strong>You:</strong> ${chatInput.value}`;
    chatContent.appendChild(userMsg);

    let botMsg = document.createElement("p");
    botMsg.innerHTML = `<strong>Carys:</strong> Thanks for reaching out 💙`;
    chatContent.appendChild(botMsg);

    chatInput.value = "";
    chatContent.scrollTop = chatContent.scrollHeight;
  }
});