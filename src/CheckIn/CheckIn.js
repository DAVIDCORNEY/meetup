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
      attendeeEmail: this.state.email,
      star: false
    });
    navigate(`/attendees/${this.props.userID}/${this.props.meetingID}`);
  };

  render() {
    return (
      <form className="mt-3" onSubmit={this.handleSubmit}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="card bg-light">
                <div className="card-body">
                  <h3 className="font-weight-light mb-3">Check In</h3>
                  <section className="form-group">
                    <label
                      className="form-control-label sr-only"
                      htmlFor="displayName"
                    >
                      Name
                    </label>
                    <input
                      required
                      className="form-control"
                      type="text"
                      id="displayName"
                      name="displayName"
                      placeholder="Name"
                      value={this.state.displayName}
                      onChange={this.handleUserInput}
                    />
                  </section>
                  <section className="form-group">
                    <label
                      className="form-control-label sr-only"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      required
                      className="form-control"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.handleUserInput}
                    />
                  </section>
                  <div className="form-group text-right mb-0">
                    <button className="btn btn-primary" type="submit">
                      Check In
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default CheckIn;
