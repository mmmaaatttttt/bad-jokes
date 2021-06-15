import React, { useState } from "react";
import "./Joke.css";

function Joke({ joke, removeJokeComingFromList }) {
  const [punchlineVisible, setPunchlineVisible] = useState(false);

  const togglePunchline = () => {
    setPunchlineVisible(vis => !vis);
  };

  const handleDelete = () => {
    removeJokeComingFromList(joke.id);
  };

  const { setup, punchline } = joke;
  let punchlineArea = <p className="prompt">Click to reveal punchline!</p>;
  if (punchlineVisible) {
    punchlineArea = (
      <div>
        <p>{punchline}</p>
        <button onClick={handleDelete}>
          I never want to see this joke again!
        </button>
      </div>
    );
  }
  return (
    <div className="Joke" onClick={togglePunchline}>
      <h3>{setup}</h3>
      {punchlineArea}
    </div>
  );
}

export default Joke;
