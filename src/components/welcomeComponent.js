import React, { Component } from "react";
import { Link } from "react-router-dom";

import AddPlayerComponent from "./addPlayerComponent";

class WelcomeComponent extends Component {
  constructor(props) {
    super();
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
        <AddPlayerComponent addPlayer={this.props.addPlayer} playerCount={playerCount} />
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
