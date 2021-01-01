import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCKf63sCOXQ8fM8vXF5AT3NynRS3PvdyUk",
    authDomain: "news-f2aaf.firebaseapp.com",
    databaseURL: "https://news-f2aaf.firebaseio.com",
    projectId: "news-f2aaf",
    storageBucket: "news-f2aaf.appspot.com",
    messagingSenderId: "535184695818",
    appId: "1:535184695818:web:f4c8c8ec3761f12e8435f3",
    measurementId: "G-46J4CK7H59"
};

let app = firebase.initializeApp(firebaseConfig);
export const db = app.database();