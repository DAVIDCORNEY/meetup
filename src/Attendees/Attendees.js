import React, { Component } from "react";
import firebase from "../Firebase";
import AttendeesList from "../AttendeesList/AttendeesList";

class Attendees extends Component {
  state = {
    attendees: []
  };

  componentDidMount() {
    const ref = firebase
      .database()
      .ref(`meetings/${this.props.userID}/${this.props.meetingID}/attendees`);
    ref.on("value", snapshot => {
      let attendees = snapshot.val();
      let attendeesList = [];
      for (let item in attendees) {
        attendeesList.push({
          attendeeID: item,
          attendeeName: attendees[item].attendeeName,
          attendeeEmail: attendees[item].attendeeEmail,
          star: attendees[item].star
        });
      }
      this.setState({
        attendees: attendeesList
      });
    });
  }

  render() {
    return (
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="font-weight-light text-center">Attendees</h1>

            <div className="card bg-light mb-4">
              <div className="card-body text-center">
                <input
                  type="text"
                  name="searchQuery"
                  placeholder="Search Attendees"
                  className="form-control"
                  value={this.state.searchQuery}
                  onChange={this.handleUserInput}
                />
              </div>
            </div>
          </div>
        </div>
        <AttendeesList
          userID={this.props.userID}
          adminUser={this.props.adminUser}
          attendees={this.state.attendees}
          meetingID={this.props.meetingID}
        />
      </div>
    );
  }
}

export default Attendees;
