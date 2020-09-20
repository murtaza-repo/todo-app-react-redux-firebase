import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyA3DrfCF5UiW11huyZjz3-e7-WPczMD54Y",
    authDomain: "todoappreact53.firebaseapp.com",
    databaseURL: "https://todoappreact53.firebaseio.com",
    projectId: "todoappreact53",
    storageBucket: "todoappreact53.appspot.com",
    messagingSenderId: "320452694934",
    appId: "1:320452694934:web:e4bd48475c702632fc43b7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;