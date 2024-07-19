import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmRQ9MojwTzGVI5FzKz1EzNmV9sX4LlWw",
  authDomain: "ev-s-partership.firebaseapp.com",
  projectId: "ev-s-partership",
  storageBucket: "ev-s-partership.appspot.com",
  messagingSenderId: "798419458964",
  appId: "1:798419458964:web:22b09fd295a009e909cd81",
  measurementId: "G-NRT76VPW6J",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);