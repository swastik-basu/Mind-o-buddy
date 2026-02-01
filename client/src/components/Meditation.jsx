export default function Meditation({ text, onBack }) {
  return (
    <div className="meditation">
      <h2>Take a moment</h2>

      <div className="meditation-text">
        {text}
      </div>

      <button className="secondary-btn" onClick={onBack}>
        Return to chat
      </button>
    </div>
  );
}
