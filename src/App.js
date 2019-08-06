import React, { Component } from "react";
import Home from "./Home/Home";
import WelcomeMessage from "./WelcomeMessage/WelcomeMessage";
import Navigation from "./Navigation/Navigation";
import Login from "./Login/Login";
import { Router } from "@reach/router";

class App extends Component {
  state = {
    user: null
  };
  render() {
    const user = this.state.user;
    return (
      <>
        <Navigation user={user} />
        {user && <WelcomeMessage user={user} />}

        <Router>
          <Home path="/" user={user} />
          <Login path="/login" />
        </Router>
      </>
    );
  }
}

export default App;
