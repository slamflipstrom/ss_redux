import React, { Component } from "react";

class WelcomeComponent extends Component {
  constructor(props) {
    super(props);
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

  startGame(playerCount) {
    if (playerCount === 1 || playerCount === 5) {
      throw "Somerset can only be played with 2, 3, 4, or 6 players";
    } else {
      this.props.startGame();
    }
  }

  render() {
    const PlayerCount = this.props.playerCount;
    return (
      <div>
        <p>Player Count: {PlayerCount}</p>
        <button onClick={() => this.addPlayer(PlayerCount)}>Add Player</button>
        <button onClick={() => this.removePlayer(PlayerCount)}>Remove Player</button>
        <br />
        <button onClick={() => this.startGame(PlayerCount)}>Start Game</button>
      </div>
    );
  }
}
export default WelcomeComponent;
