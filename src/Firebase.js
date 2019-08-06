import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcseQuxzRKLShHBilP_l8L85tVBBNfJxY",
  authDomain: "meetup-1dd6b.firebaseapp.com",
  databaseURL: "https://meetup-1dd6b.firebaseio.com",
  projectId: "meetup-1dd6b",
  storageBucket: "",
  messagingSenderId: "920077160604",
  appId: "1:920077160604:web:533a96f18600a97f"
};

firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
