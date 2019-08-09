import React, { Component } from "react";
import firebase from "../Firebase";
import { GoTrashcan, GoListOrdered } from "react-icons/go";
import { FaLink } from "react-icons/fa";
import { navigate } from "@reach/router";

class MeetingsList extends Component {
  deleteMeeting = (event, whichMeeting) => {
    event.preventDefault();
    const ref = firebase
      .database()
      .ref(`meetings/${this.props.userID}/${whichMeeting}`);
    ref.remove();
  };

  render() {
    const { meetings } = this.props;
    const myMeetings = meetings.map(item => {
      return (
        <div className="list-group-item d-flex" key={item.meetingID}>
          <section
            className="btn-group align-self-center"
            role="group"
            aria-label="Meeting Information"
          >
            <button
              className="btn btn-sm btn-outline-secondary"
              title="Delete Meeting"
              onClick={event => this.deleteMeeting(event, item.meetingID)}
            >
              <GoTrashcan />
            </button>
            <button
              className="btn btn-sm btn-outline-secondary"
              title="Check In Meeting"
              onClick={() =>
                navigate(`/checkin/${this.props.userID}/${item.meetingID}`)
              }
            >
              <FaLink />
            </button>
            <button
              className="btn btn-sm btn-outline-secondary"
              title="Meetings List"
              onClick={() =>
                navigate(`/attendees/${this.props.userID}/${item.meetingID}`)
              }
            >
              <GoListOrdered />
            </button>
          </section>

          <section className="pl-3 text-left align-self-center">
            {item.meetingName}
          </section>
        </div>
      );
    });
    return <div>{myMeetings}</div>;
  }
}

export default MeetingsList;
