import firebase from "firebase/app"
import "firebase/auth"

import { initializeApp } from "firebase/app";

const app = initializeApp(firebaseConfig);

const firebaseConfig = {
  apiKey: "AIzaSyDicO8qNj6NqH55BZXicx3HzQFBO5Dx6TU",
  authDomain: "test-01-21c0e.firebaseapp.com",
  databaseURL: "https://test-01-21c0e.firebaseio.com",
  projectId: "test-01-21c0e",
  storageBucket: "test-01-21c0e.appspot.com",
  messagingSenderId: "748045487295",
  appId: "1:748045487295:web:1b92c2dfa43d0bb3740a0a"
};


export const auth = app.auth()
export default app