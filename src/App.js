import React, { Component } from "react";
import { Router } from "@reach/router";
import firebase from "./Firebase";

import Home from "./Home/Home";
import WelcomeMessage from "./WelcomeMessage/WelcomeMessage";
import Navigation from "./Navigation/Navigation";
import Login from "./Login/Login";
import Meetings from "./Meetings/Meetings";
import Register from "./Register/Register";

class App extends Component {
  state = {
    user: null,
    displayName: null,
    userID: null
  };

  componentDidMount() {
    const ref = firebase.database().ref("user");
    ref.on("value", snapshot => {
      let DBUser = snapshot.val();
      this.setState({ user: DBUser });
    });
  }

  registerUser = userName => {
    firebase.auth().onAuthStateChanged(DBUser => {
      DBUser.updateProfile({
        displayName: userName
      }).then(() => {
        this.setState({
          user: DBUser,
          displayName: DBUser.displayName,
          userId: DBUser.uid
        });
      });
    });
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
          <Meetings path="/meetings" />
          <Register path="/register" registerUser={this.registerUser} />
        </Router>
      </>
    );
  }
}

export default App;
