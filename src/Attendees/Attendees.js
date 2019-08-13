import React, { Component } from "react";
import firebase from "../Firebase";
import AttendeesList from "../AttendeesList/AttendeesList";
import { FaUndo, FaRandom } from "react-icons/fa";

class Attendees extends Component {
  state = {
    searchQuery: "",
    allAttendees: [],
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
        attendees: attendeesList,
        allAttendees: attendeesList
      });
    });
  }

  handleUserInput = event => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    this.setState({
      [inputName]: inputValue
    });
  };

  resetSearch = event => {
    event.preventDefault();
    this.setState({
      attendees: this.state.allAttendees,
      searchQuery: ""
    });
  };

  randomAttendee = event => {
    const random = Math.floor(Math.random() * this.state.allAttendees.length);
    this.resetSearch();
    this.setState({
      attendees: [this.state.allAttendess[random]]
    });
  };

  render() {
    const filterAttendee = item =>
      item.attendeeName
        .toLowerCase()
        .match(this.state.searchQuery.toLowerCase());
    const filteredAttendees = this.state.attendees.filter(filterAttendee);

    return (
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="font-weight-light text-center">Attendees</h1>

            <div className="card bg-light mb-4">
              <div className="card-body text-center">
                <div className="input-group input-group-lg">
                  <input
                    type="text"
                    name="searchQuery"
                    placeholder="Search Attendees"
                    className="form-control"
                    value={this.state.searchQuery}
                    onChange={this.handleUserInput}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-sm btn-outline-info"
                      title="Pick a Random Attendee"
                      onClick={event => this.randomAttendee(event)}
                    >
                      <FaRandom />
                    </button>
                    <button
                      className="btn btn-sm btn-outline-info"
                      title="Reset"
                      onClick={event => this.resetSearch(event)}
                    >
                      <FaUndo />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AttendeesList
          userID={this.props.userID}
          adminUser={this.props.adminUser}
          attendees={filteredAttendees}
          meetingID={this.props.meetingID}
        />
      </div>
    );
  }
}

export default Attendees;
