import React, { Component } from "react";
import { Link } from "@reach/router";

class Home extends Component {
  state = {};
  render() {
    const { user } = this.props;
    return (
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-10 col-md-10 col-lg-10">
            <h1 className="display-4 text-primary mt-3 mb-2">MeetUp</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              commodo a justo vitae aliquet. Vivamus erat justo, eleifend a sem
              non, elementum viverra lectus. Morbi eu quam sapien. Pellentesque
              consequat lectus id erat auctor tincidunt. Cras maximus lacinia
              aliquam. Vestibulum posuere lorem vitae cursus tincidunt. Duis ut
              efficitur orci. Maecenas tincidunt lacus diam, id molestie nisl
              vestibulum sed.
            </p>
            {user === null && (
              <>
                <Link to="/register" className="btn btn-outline-primary mr-2">
                  Register
                </Link>
                <Link to="/login" className="btn btn-outline-primary mr-2">
                  Login
                </Link>
              </>
            )}
            <Link to="/meetings" className="btn btn-primary">
              Meetings
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
