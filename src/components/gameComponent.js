import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as gameActions from "../actions/startGame";
import WelcomeComponent from "./welcomeComponent";

class GameComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Game">
        <WelcomeComponent playerCount={this.props.playerCount} addPlayer={this.props.action.addPlayer} />
      </div>
    );
  }
}
function mapStateToProps(state, props) {
  return {
    playerCount: state.game.playerCount
  };
}
function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(gameActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(GameComponent);
