import React, { Component } from "react";
import JokeForm from "./JokeForm";
import Joke from "./Joke";

class JokeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [
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
      ],
      nextId: 3
    };
    this.addJoke = this.addJoke.bind(this);
  }

  addJoke(newJokeObj) {
    const jokeWithId = { ...newJokeObj, id: this.state.nextId };
    this.setState(st => ({
      jokes: [jokeWithId, ...st.jokes],
      nextId: st.nextId + 1
    }));
  }

  render() {
    return (
      <div>
        <h1>JokeList</h1>
        <JokeForm addJokeComingFromList={this.addJoke} />
        {this.state.jokes.map(joke => (
          <Joke key={joke.id} joke={joke} />
        ))}
      </div>
    );
  }
}

export default JokeList;
