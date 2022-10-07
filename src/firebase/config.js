import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9Ts26AcP3V-i0OEcJIt4N0rQZ7wSEoaY",
  authDomain: "mymoney-v1-542f4.firebaseapp.com",
  projectId: "mymoney-v1-542f4",
  storageBucket: "mymoney-v1-542f4.appspot.com",
  messagingSenderId: "514015679640",
  appId: "1:514015679640:web:ab47718d713482f0f0eced",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
