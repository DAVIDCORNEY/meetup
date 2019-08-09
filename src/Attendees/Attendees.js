import React, { Component } from "react";
import firebase from "../Firebase";

class Attendees extends Component {
  state = {
    attendees: []
  };

  componentDidMount() {
    const ref = firebase
      .database()
      .ref(`meetings/${this.props.userID}/${this.props.meetingID}/attendees`);
  }

  render() {
    return (
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="font-weight-light text-center">Attendees</h1>
          </div>
        </div>
        List
      </div>
    );
  }
}

export default Attendees;
