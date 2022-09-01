import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAT7uJTupmoY046mwRU7vNRka-MzjuEe44",
    authDomain: "mymoney-v1-d2851.firebaseapp.com",
    projectId: "mymoney-v1-d2851",
    storageBucket: "mymoney-v1-d2851.appspot.com",
    messagingSenderId: "779886433178",
    appId: "1:779886433178:web:5429bffae9560fcdd26023"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export {
    projectFirestore,
    projectAuth
}