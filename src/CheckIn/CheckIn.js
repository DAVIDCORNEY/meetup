import React, { Component } from "react";
import firebase from "../Firebase";
import { navigate } from "@reach/router";

class CheckIn extends Component {
  state = {
    displayName: "",
    email: ""
  };

  handleUserInput = event => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    this.setState({
      [inputName]: inputValue
    });
  };

  render() {
    return <div />;
  }
}

export default CheckIn;
