import "./Body.css";

export default function Body({ joke, onJokeVote }) {
  return (
    <div className="body-container">
      <div className="intros-container">
        <div className="main-intro">
          <span>A joke a day keeps the doctor away</span>
        </div>
        <div className="sub-intro">
          <span>If you joke wrong way, your teeth have to pay. (Serious)</span>
        </div>
      </div>

      <div className="joke-container">
        <p>
          {joke?.content ||
            "That's all the jokes for today! Come back another day!"}
        </p>
      </div>

      <div className="divider"></div>

      <div className="votes">
        <div className="positive-vote">
          <button onClick={() => onJokeVote(joke, "positive")}>
            This is Funny!
          </button>
        </div>
        <div className="negative-vote">
          <button onClick={() => onJokeVote(joke, "negative")}>
            This is not funny.
          </button>
        </div>
      </div>
    </div>
  );
}
