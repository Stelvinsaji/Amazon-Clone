import firebase from "firebase";

const firebaseConfig = {
  // Paste your Config here
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
