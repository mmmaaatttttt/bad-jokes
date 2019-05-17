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
    let punchlineArea = <p className="prompt">Click to reveal punchline!</p>;
    if (punchlineVisible) {
      punchlineArea = <p>{punchline}</p>
    }  
    return (
      <div className="Joke" onClick={this.togglePunchline}>
        <h3>{setup}</h3>
        {punchlineArea}
      </div>
    );
  }
}

export default Joke;
