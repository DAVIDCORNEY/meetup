import React, { Component } from "react";
import { FaUsers } from "react-icons/fa";

class Navigation extends Component {
  state = {};
  render() {
    return (
      <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            Meeting Log
          </a>
        </div>
      </nav>
    );
  }
}

export default Navigation;
