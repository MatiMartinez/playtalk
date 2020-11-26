import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./config";

class Firebase {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    this.auth = firebase.auth();
  }

  provider = new firebase.auth.GoogleAuthProvider();

  // TODO: Login user with google
  async loginUser() {
    //const result = await firebase.auth().signInWithPopup(this.provider);
    const result = await this.auth.signInWithPopup(this.provider);
    const { user, credentials } = result;

    console.log(user, credentials);
  }

  // TODO: Disconnect user
  async logoutUser() {
    await this.auth.signOut();
  }
}

const fbase = new Firebase();
export default fbase;
