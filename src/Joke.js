import React, { Component } from "react";
import "./Joke.css";

class Joke extends Component {
  constructor(props) {
    super(props);
    this.state = {
      punchlineVisible: false
    };
    this.togglePunchline = this.togglePunchline.bind(this);
  }

  togglePunchline() {
    this.setState(st => ({ punchlineVisible: !st.punchlineVisible }));
  }

  render() {
    const { setup, punchline } = this.props.joke;
    const { punchlineVisible } = this.state;
    return (
      <div className="Joke" onClick={this.togglePunchline}>
        <h3>{setup}</h3>
        <p className={!punchlineVisible && "prompt"}>{punchlineVisible ? punchline : "Click to reveal punchline!"}</p>
      </div>
    );
  }
}

export default Joke;
