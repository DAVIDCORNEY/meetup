import React, { Component } from "react";

class MeetingsList extends Component {
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
            >
              Button
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
