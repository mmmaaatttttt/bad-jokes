import React, { useState } from "react";
import JokeForm from "./JokeForm";
import Joke from "./Joke";
import "./JokeList.css";

function JokeList() {
  const [jokes, setJokes] = useState([
    {
      setup: "How do you get a tissue to dance?",
      punchline: "Put a little boogie in it!",
      id: 1
    },
    {
      setup: "How does the ocean say goodbye?",
      punchline: "It waves!",
      id: 2
    }
  ]);
  const [nextId, setNextId] = useState(3);

  const addJoke = newJokeObj => {
    const jokeWithId = { ...newJokeObj, id: nextId };
    setJokes(oldJokes => [jokeWithId, ...oldJokes]);
    setNextId(oldId => oldId + 1);
  };

  const removeJoke = idOfJokeToDelete => {
    setJokes(oldJokes => oldJokes.filter(joke => idOfJokeToDelete !== joke.id));
  };

  return (
    <div className="JokeList">
      <h1>JokeList</h1>
      <JokeForm addJokeComingFromList={addJoke} />
      {jokes.map(joke => (
        <Joke joke={joke} key={joke.id} removeJokeComingFromList={removeJoke} />
      ))}
    </div>
  );
}

export default JokeList;
