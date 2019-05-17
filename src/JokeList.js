import React, { Component } from "react";
import JokeForm from "./JokeForm";
import Joke from "./Joke";

class JokeList extends Component {
  render() {
    return (
      <div>
        <h1>JokeList</h1>
        <JokeForm />
        <Joke />
      </div>
    );
  }
}

export default JokeList;
