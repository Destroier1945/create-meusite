 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjqgoj7BIZeJn-SVqQ7tf8FuoiwG1foVw",
  authDomain: "destroyer1945-89edb.firebaseapp.com",
  databaseURL: "https://destroyer1945-89edb-default-rtdb.firebaseio.com",
  projectId: "destroyer1945-89edb",
  storageBucket: "destroyer1945-89edb.appspot.com",
  messagingSenderId: "1094710867058",
  appId: "1:1094710867058:web:0fb035d94e75e1d5553eeb",
  measurementId: "G-DRBGSRP0M7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);