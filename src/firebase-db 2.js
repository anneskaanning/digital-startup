import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase
  .initializeApp({
   apiKey: "AIzaSyAzjL2i4awqIvV4ojAybIdOZRFXfJD9-sc",
    authDomain: "digital-startup-d2f58.firebaseapp.com",
    databaseURL: "https://digital-startup-d2f58.firebaseio.com",
    projectId: "digital-startup-d2f58",
    storageBucket: "digital-startup-d2f58.appspot.com",
    messagingSenderId: "383974769041",
    appId: "1:383974769041:web:c723fe0848624f509f1a30"
  })
  .firestore();

export const postRef = db.collection("items");