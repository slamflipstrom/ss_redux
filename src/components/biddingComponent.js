import React, { Component } from "react";
import { Link } from "react-router-dom";

class BiddingComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { playerCount } = this.props;
    return (
      <div>
        <p>Player Count: {playerCount}</p>
      </div>
    );
  }
}
export default BiddingComponent;
