import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAXLiwTHiBP9pFI0CJ2gPxf3EkMdUJX5ns",
    authDomain: "cryptowebapp-37064.firebaseapp.com",
    projectId: "cryptowebapp-37064",
    storageBucket: "cryptowebapp-37064.appspot.com",
    messagingSenderId: "998829389546",
    appId: "1:998829389546:web:3999ff05d42502cbd20993",
    measurementId: "G-MWVEN66T0K"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const provider = new firebase.auth.GoogleAuthProvider()