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

  handleSubmit = event => {
    event.preventDefault();
    const ref = firebase
      .database()
      .ref(`meetings/${this.props.userID}/${this.props.meetingID}/attendees`);
    ref.push({
      attendeeName: this.state.displayName,
      attendeeEmail: this.state.email
    });
  };

  render() {
    return <div />;
  }
}

export default CheckIn;
