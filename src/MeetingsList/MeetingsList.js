import React, { Component } from "react";
import { Link } from "@reach/router";

class MeetingsList extends Component {
  render() {
    const { meetings } = this.props;
    const myMeetings = meetings.map(item => {
      this.return(
        <div className="list-group-item d-flex" key={item.meetingID}>
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
