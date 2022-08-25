import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCq-E2Np-upzlF84SRZeTLQaxHweCp0aNs",
  authDomain: "rtk-http-miniproject.firebaseapp.com",
  projectId: "rtk-http-miniproject",
  storageBucket: "rtk-http-miniproject.appspot.com",
  messagingSenderId: "605217767939",
  appId: "1:605217767939:web:64ed9d97588bdeaf9c4436",
  measurementId: "G-8QKN1SGQEQ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
