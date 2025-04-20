// Open the chatbot popup when the floating button is clicked
document.getElementById("chatbot-button").addEventListener("click", () => {
  const popup = document.getElementById("chatbot-popup");
  popup.style.display = popup.style.display === "none" ? "block" : "none"; // Toggle visibility
});

// Handle sending a message to the chatbot
async function sendMessage() {
  const input = document.getElementById("user-input");
  const log = document.getElementById("chat-log");
  const message = input.value.trim();

  if (!message) return;

  log.innerHTML += `🧑: ${message}\n`;
  input.value = "";
  log.innerHTML += "🤖: Typing...\n";

  try {
    const res = await fetch("http://localhost:3000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    log.innerHTML = log.innerHTML.replace("🤖: Typing...\n", `🤖: ${data.reply}\n`);
  } catch (err) {
    log.innerHTML = log.innerHTML.replace("🤖: Typing...\n", "❌ Error contacting the chatbot.\n");
    console.error(err);
  }

  // Scroll to bottom automatically
  log.scrollTop = log.scrollHeight;
}
