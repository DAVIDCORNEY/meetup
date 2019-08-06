import React, { Component } from "react";
import { Link } from "@reach/router";

class WelcomeMessage extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="text-center mt-4">
        <span className="text-secondary font-weight-bold pl-1">
          Welcome {user},
        </span>
        <Link to="/login" className="font-weight-bold text-primary pl-1">
          log out
        </Link>
      </div>
    );
  }
}

export default WelcomeMessage;
