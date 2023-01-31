import { initializeApp } from "firebase/app";

import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUlsa7_3Kh9md6rWL43nJxQta8dDeC1-0",
  authDomain: "teleshravan.firebaseapp.com",
  projectId: "teleshravan",
  storageBucket: "teleshravan.appspot.com",
  messagingSenderId: "392207564945",
  appId: "1:392207564945:web:1297bdeb9bd0ce3d377f30",
  measurementId: "G-39G8MK3K6P",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
