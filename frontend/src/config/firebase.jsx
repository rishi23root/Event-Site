// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth"

// import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt93eBek317SwBpetPOFlIBNwaiBFEyXE",
  authDomain: "event-site-9a0b1.firebaseapp.com",
  projectId: "event-site-9a0b1",
  storageBucket: "event-site-9a0b1.appspot.com",
  messagingSenderId: "786809291182",
  appId: "1:786809291182:web:53b49d9b13bee9ec73083f",
  measurementId: "G-3VV3W1YYPH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;