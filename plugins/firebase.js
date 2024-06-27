import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCun8lsh-ONt1uEbCOIdyvpMdT3ZzgFFuA",
  authDomain: "portfolio-9148d.firebaseapp.com",
  projectId: "portfolio-9148d",
  storageBucket: "portfolio-9148d.appspot.com",
  messagingSenderId: "54297545696",
  appId: "1:54297545696:web:4aab0bddb5c658968df985",
  measurementId: "G-YBTLRE7JST"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const db = firebase.firestore();

export { db, firebase };