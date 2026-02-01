import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const res = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input })
    });

    const data = await res.json();

    const botMessage = {
      role: "assistant",
      text: data.reply
    };

    setMessages((prev) => [...prev, botMessage]);
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((m, i) => (
          <div key={i} className={`message ${m.role}`}>
            {m.text}
          </div>
        ))}
      </div>

      <div className="input-area">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type how you feel…"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

const shouldSuggestMeditation = input.toLowerCase().includes("stress");

if (shouldSuggestMeditation) {
  onMeditation(
    "Sit comfortably and let your shoulders relax. Take a slow breath in through your nose… and gently breathe out. Allow your thoughts to pass without holding onto them."
  );
  return;
}
