import React, { Component } from "react";

class WelcomeComponent extends Component {
  constructor(props) {
    super(props);

    this.addPlayer = this.addPlayer.bind(this);
  }

  addPlayer(playerCount) {
    if (playerCount > 5) {
      return;
    } else {
      this.props.addPlayer(playerCount);
    }
  }

  removePlayer(playerCount) {
    if (playerCount < 1) {
      return;
    } else {
      this.props.removePlayer(playerCount);
    }
  }
  render() {
    const PlayerCount = this.props.playerCount;
    return (
      <div>
        <p>Player Count: {PlayerCount}</p>
        <button onClick={() => this.addPlayer(PlayerCount)}>Add Player</button>
        <button onClick={() => this.removePlayer(PlayerCount)}>Remove Player</button>
      </div>
    );
  }
}
export default WelcomeComponent;
