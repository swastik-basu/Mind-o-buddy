import { useState } from "react";
import Chat from "./components/Chat";
import Landing from "./components/Landing";
import Meditation from "./components/Meditation";
import "./styles.css";

export default function App() {
  const [screen, setScreen] = useState("landing");
  const [meditationText, setMeditationText] = useState("");

  const startChat = () => setScreen("chat");

  const openMeditation = (text) => {
    setMeditationText(text);
    setScreen("meditation");
  };

  return (
    <div className="app">
      {screen === "landing" && <Landing onStart={startChat} />}

      {screen === "chat" && (
        <Chat onMeditation={openMeditation} />
      )}

      {screen === "meditation" && (
        <Meditation
          text={meditationText}
          onBack={() => setScreen("chat")}
        />
      )}
    </div>
  );
}
