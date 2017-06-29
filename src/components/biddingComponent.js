import React, { Component } from "react";
import { Link } from "react-router-dom";

class BiddingComponent extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { playerCount } = this.props;
    return (
      <div>
        <h2>Bidding has begun</h2>
        <h1>player.name bids first</h1>
        <p>Player Count: {playerCount}</p>
        <Link to={"/"}>Back</Link>
      </div>
    );
  }
}
export default BiddingComponent;
