import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDp8DSXaha7K0GsfIo7KOgNimieV6lzp4c",
  authDomain: "tutorial-codingapple.firebaseapp.com",
  projectId: "tutorial-codingapple",
  storageBucket: "tutorial-codingapple.appspot.com",
  messagingSenderId: "577125604918",
  appId: "1:577125604918:web:9381618b8d459365e70297"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)