import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCgfkmEBx-28bTI0FhjCGtL5s73GOMn4NU",
  authDomain: "login-7f170.firebaseapp.com",
  projectId: "login-7f170",
  storageBucket: "login-7f170.appspot.com",
  messagingSenderId: "797734298514",
  appId: "1:797734298514:web:dfc4a02d62f0964fa3174b"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);