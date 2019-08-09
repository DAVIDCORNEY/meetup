import React from "react";

const AttendeesList = ({ attendees }, userID, adminUser) => {
  const admin = adminUser === userID ? true : false;
  const allAttendees = attendees.map(attendee => {
    return (
      <div
        className="col-8 col-sm-6 col-md-4 col-lg-3 mb-2 p-0 px-1"
        key={attendee.attendeeID}
      >
        <div className="card">
          <div
            className={"card-body px-3 py-2 d-flex align-items-center"(
              admin ? "" : "justify-content-center"
            )}
          />

          <div>{attendee.attendeeName}</div>
        </div>
      </div>
    );
  });
  return <div className="row justify-content-center">{allAttendees}</div>;
};

export default AttendeesList;
