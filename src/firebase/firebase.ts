import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCljVQnKSSnRivu9L-7l8CYnFQxctXfZtU",
  authDomain: "ev-s-partership-fee9f.firebaseapp.com",
  projectId: "ev-s-partership-fee9f",
  storageBucket: "ev-s-partership-fee9f.appspot.com",
  messagingSenderId: "834763142724",
  appId: "1:834763142724:web:16adce2894e082a602ee11",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);