export default function Landing({ onStart }) {
  return (
    <div className="landing">
      <h1>Mind-o-Buddy</h1>

      <p className="landing-text">
        A quiet space to slow down, breathe, and share what’s on your mind.
      </p>

      <p className="landing-subtext">
        No accounts. No judgments. Just a few calm moments for yourself.
      </p>

      <button className="primary-btn" onClick={onStart}>
        Start a conversation
      </button>
    </div>
  );
}
