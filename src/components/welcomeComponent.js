import React, { Component } from "react";

class WelcomeComponent extends Component {
  constructor(props) {
    super(props);

    this.addPlayer = this.addPlayer.bind(this);

    this.state = {
      game: {
        playerCount: 0
      }
    };
  }
  addPlayer(playerCount) {
    this.props.addPlayer(playerCount);
  }

  render() {
    const PlayerCount = this.state.game.playerCount;
    return (
      <div>
        <button onClick={() => this.addPlayer(PlayerCount)}>Add Player</button>
      </div>
    );
  }
}
export default WelcomeComponent;
