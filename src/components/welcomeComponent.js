import React, { Component } from "react";
import { Link } from "react-router-dom";

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
    const { playerCount } = this.props;
    return (
      <div>
        <p>Player Count: {playerCount}</p>
        <button onClick={() => this.addPlayer(playerCount)}>Add Player</button>
        <button onClick={() => this.removePlayer(playerCount)}>Remove Player</button>
        <br />
        <Link to={"/bid"}>
          <button onClick={() => this.startGame(playerCount)}>
            Start Game
          </button>
        </Link>
      </div>
    );
  }
}
export default WelcomeComponent;
