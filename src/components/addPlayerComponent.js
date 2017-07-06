import React, { Component } from "react";

class AddPlayerComponent extends Component {
  constructor(props) {
    super();
    this.state = { value: "" };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  addPlayer(playerCount) {
    if (playerCount > 5) {
      return;
    } else {
      this.props.addPlayer(playerCount);
    }
  }

  render() {
    const { playerCount } = this.props;
    return (
      <div>
        <button onClick={() => this.addPlayer(playerCount)}>Add Player</button>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          name="name"
        />
      </div>
    );
  }
}
export default AddPlayerComponent;
