import React, { Component } from 'react';

class WelcomeComponent extends Component {
  constructor(props) {
    super(props);

    this.onGameStart = this.onGameStart.bind(this);

    this.state = {
      game: [
        { playerCount: 0 }
      ]
    }
  }
  onGameStart(playerCount) {
    this.props.addPlayer(playerCount);
  } 
 
  render() {
    const PlayerCount = this.state.game.playerCount;
    return (
      <div>
        <button onClick={ () => this.onGameStart(PlayerCount) }>Add Player</button>
      </div>
    );
  }
}
export default WelcomeComponent;