// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKJ8dSn_XnhrGkpDTaWVb73CTlWW_8FeQ",
  authDomain: "toy-market-9e676.firebaseapp.com",
  projectId: "toy-market-9e676",
  storageBucket: "toy-market-9e676.appspot.com",
  messagingSenderId: "147663212332",
  appId: "1:147663212332:web:a80d4acd7fa261a6c1e689",
  measurementId: "G-HLN3W4E3P6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;
