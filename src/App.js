import React, { Component } from "react";
import { Router, navigate } from "@reach/router";
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
    firebase.auth().onAuthStateChanged(DBUser => {
      if (DBUser) {
        this.setState({
          user: DBUser,
          displayName: DBUser.displayName,
          userID: DBUser.uid
        });
        const meetingsRef = firebase.database().ref("meetings/" + DBUser.uid);
        meetingsRef.on("value", snapshot => {
          let meetings = snapshot.val();
          let meetingsList = [];
          for (let item in meetings) {
            meetingsList.push({
              meetingId: item,
              meetingName: meetings[item].meetingName
            });
          }
          this.setState({
            meetings: meetingsList,
            numMeetings: meetingsList.length
          });
        });
      } else {
        this.setState({ user: null });
      }
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
          userID: DBUser.uid
        });
        navigate("./meetings");
      });
    });
  };

  logoutUser = event => {
    event.preventDefault();
    this.setState({
      user: null,
      displayName: null,
      userID: null
    });
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigate("./login");
      });
  };

  addMeeting = meetingName => {
    const ref = firebase.database().ref(`meetings/${this.state.user.uid}`);
    ref.push({ meetingName: meetingName });
  };

  render() {
    const user = this.state.user;
    const userName = this.state.displayName;
    return (
      <>
        <Navigation user={user} logoutUser={this.logoutUser} />
        {user && (
          <WelcomeMessage userName={userName} logoutUser={this.logoutUser} />
        )}

        <Router>
          <Home path="/" user={user} />
          <Login path="/login" />
          <Meetings
            path="/meetings"
            addMeeting={this.addMeeting}
            meetings={this.state.meetings}
          />
          <Register path="/register" registerUser={this.registerUser} />
        </Router>
      </>
    );
  }
}

export default App;
