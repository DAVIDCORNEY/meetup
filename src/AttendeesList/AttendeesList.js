import React, { Component } from "react";
import { GoTrashcan } from "react-icons/go";
import firebase from "../Firebase";

class AttendeesList extends Component {
  deleteAttendee = (event, whichMeeting, whichAttendee) => {
    event.preventDefault();
    const adminUser = this.props.adminUser;
    const ref = firebase
      .database()
      .ref(`/meetings/${adminUser}/${whichMeeting}/attendees/${whichAttendee}`);
    ref.remove();
  };

  render() {
    const { attendees, userID, adminUser, meetingID } = this.props;
    const admin = adminUser === userID ? true : false;
    const allAttendees = attendees.map(attendee => {
      return (
        <div
          className="col-8 col-sm-6 col-md-4 col-lg-3 mb-2 p-0 px-1"
          key={attendee.attendeeID}
        >
          <div className="card">
            <div
              className={
                "card-body px-3 py-2 d-flex align-items-center " +
                (admin ? "" : "justify-content-center")
              }
            >
              {admin && (
                <div className="btn-group pr-2">
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    title="Delete Attendee"
                    onClick={event =>
                      this.deleteAttendee(event, meetingID, attendee.attendeeID)
                    }
                  >
                    <GoTrashcan />
                  </button>
                </div>
              )}
              <div>{attendee.attendeeName}</div>
            </div>
          </div>
        </div>
      );
    });
    return <div className="row justify-content-center">{allAttendees}</div>;
  }
}

export default AttendeesList;
