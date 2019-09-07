import React, { Component } from "react";
import { Link } from "@reach/router";

class WelcomeMessage extends Component {
  render() {
    const { userName, logoutUser } = this.props;
    return (
      <div className="text-center mt-4">
        <span className="text-secondary font-weight-bold pl-1">
          Welcome {userName},
        </span>
        <Link
          to="/login"
          className="font-weight-bold text-info pl-1"
          onClick={event => logoutUser(event)}
        >
          log out
        </Link>
      </div>
    );
  }
}

export default WelcomeMessage;
