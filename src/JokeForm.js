import React, { Component } from "react";

class JokeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setup: "",
      punchline: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addJokeComingFromList(this.state);
    this.setState({
      setup: "",
      punchline: ""
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="setup">Joke Setup:</label>
          <input
            name="setup"
            id="setup"
            value={this.state.setup}
            onChange={this.handleChange}
          />
          <label htmlFor="punchline">Joke Punchline:</label>
          <input
            name="punchline"
            id="punchline"
            value={this.state.punchline}
            onChange={this.handleChange}
          />
          <button>Add this amazing joke!</button>
        </form>
      </div>
    );
  }
}

export default JokeForm;
