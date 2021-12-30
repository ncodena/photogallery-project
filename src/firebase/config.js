// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firebase from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVvPTEQd2XMUw_0v4cUO8JgzbIEBwu5mc",
  authDomain: "photography-project-4445f.firebaseapp.com",
  projectId: "photography-project-4445f",
  storageBucket: "photography-project-4445f.appspot.com",
  messagingSenderId: "804686259292",
  appId: "1:804686259292:web:ed440de147dc8e5eb67299",
  measurementId: "G-GREW8TXGDV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const projectStorage = firebase.storage();

const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore}