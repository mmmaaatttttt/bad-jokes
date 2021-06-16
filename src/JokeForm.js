import React, { useState } from "react";

function JokeForm({ addJokeComingFromList }) {
  const [formData, setFormData] = useState({ setup: "", punchline: "" });

  const handleChange = evt => {
    setFormData(fd => ({
      ...fd,
      [evt.target.name]: evt.target.value
    }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    addJokeComingFromList(formData);

    // reset the form
    setFormData({ setup: "", punchline: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="setup">Joke Setup:</label>
      <input
        name="setup"
        id="setup"
        value={formData.setup}
        onChange={handleChange}
      />
      <label htmlFor="punchline">Joke Punchline:</label>
      <input
        name="punchline"
        id="punchline"
        value={formData.punchline}
        onChange={handleChange}
      />
      <button>Add this amazing joke!</button>
    </form>
  );
}

export default JokeForm;
