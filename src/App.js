import React, { Component } from "react";
import Home from "./Home/Home";
import WelcomeMessage from "./WelcomeMessage/WelcomeMessage";

class App extends Component {
  state = {
    user: "Ray"
  };
  render() {
    const user = this.state.user;
    return (
      <>
        {user && <WelcomeMessage user={user} />}
        <Home user={user} />
      </>
    );
  }
}

export default App;
