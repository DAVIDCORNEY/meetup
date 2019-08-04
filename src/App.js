import React, { Component } from "react";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-10 col-md-10 col-lg-10">
            <h1>Meeting</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              commodo a justo vitae aliquet. Vivamus erat justo, eleifend a sem
              non, elementum viverra lectus. Morbi eu quam sapien. Pellentesque
              consequat lectus id erat auctor tincidunt. Cras maximus lacinia
              aliquam. Vestibulum posuere lorem vitae cursus tincidunt. Duis ut
              efficitur orci. Maecenas tincidunt lacus diam, id molestie nisl
              vestibulum sed.
            </p>
            <a href="/register" className="btn btn-outline-primary mr-2">
              Register
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
