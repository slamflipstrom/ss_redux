import React, { Component } from "react";

class WelcomeComponent extends Component {
  constructor(props) {
    super(props);

    this.addPlayer = this.addPlayer.bind(this);
  }

  addPlayer(playerCount) {
    this.props.addPlayer(playerCount);
  }

  render() {
    const PlayerCount = this.props.playerCount;
    return (
      <div>
        <p>Player Count: {PlayerCount}</p>
        <button onClick={() => this.addPlayer(PlayerCount)}>Add Player</button>
      </div>
    );
  }
}
export default WelcomeComponent;
