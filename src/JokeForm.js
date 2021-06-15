import React, { useState } from "react";

function JokeForm({ addJokeComingFromList }) {
  const [setup, setSetup] = useState("");
  const [punchline, setPunchline] = useState("");

  /* Note: It's common to only have one handleChange
  function, rather than a unique one per-input in the form.
  But for simplicity, we'll use separate change handling 
  functions here. */
  const handleSetupChange = e => {
    setSetup(e.target.value);
  };

  const handlePunchlineChange = e => {
    setPunchline(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addJokeComingFromList({ setup, punchline });

    // reset the form
    setSetup("");
    setPunchline("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="setup">Joke Setup:</label>
      <input
        name="setup"
        id="setup"
        value={setup}
        onChange={handleSetupChange}
      />
      <label htmlFor="punchline">Joke Punchline:</label>
      <input
        name="punchline"
        id="punchline"
        value={punchline}
        onChange={handlePunchlineChange}
      />
      <button>Add this amazing joke!</button>
    </form>
  );
}

export default JokeForm;
