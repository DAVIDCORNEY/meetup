import React, { Component } from "react";
import Home from "./Home/Home";

class App extends Component {
  state = {
    user: "Ray"
  };
  render() {
    const user = this.state.user;
    return <Home user={user} />;
  }
}

export default App;
