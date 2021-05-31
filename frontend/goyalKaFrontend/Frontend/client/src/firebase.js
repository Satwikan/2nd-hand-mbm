import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCOXoHXqstOZGMywbfYpuCf9bEmcwwi_2c",
    authDomain: "react-node-e.firebaseapp.com",
    projectId: "react-node-e",
    storageBucket: "react-node-e.appspot.com",
    messagingSenderId: "1040875132686",
    appId: "1:1040875132686:web:cc4ed304f29b2a5d01e95f",
    measurementId: "G-93R4611Q4Z"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const googleProvider = new firebase.auth.GoogleAuthProvider();