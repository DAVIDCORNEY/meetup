import React, { Component } from "react";
import { IoIosPeople } from "react-icons/io";
import { Link } from "@reach/router";

class Navigation extends Component {
  state = {};
  render() {
    const { user, logoutUser } = this.props;
    return (
      <nav className="site-nav family-sans navbar navbar-expand bg-info navbar-dark higher">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <IoIosPeople className="mr-1 mb-1 " />
            MeetUp
          </Link>
          <div className="navbar-nav ml auto">
            {user && (
              <Link className="nav-item nav-link" to="/meetings">
                meetings
              </Link>
            )}
            {!user && (
              <Link className="nav-item nav-link" to="/login">
                log in
              </Link>
            )}
            {!user && (
              <Link className="nav-item nav-link" to="/register">
                register
              </Link>
            )}
            {user && (
              <Link
                className="nav-item nav-link"
                to="/login"
                onClick={event => logoutUser(event)}
              >
                log out
              </Link>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
