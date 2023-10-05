// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsys3F_MdGUgOMDe_rsrlU2K81MBV1Uuk",
  authDomain: "netflix-gpt-f6cdc.firebaseapp.com",
  projectId: "netflix-gpt-f6cdc",
  storageBucket: "netflix-gpt-f6cdc.appspot.com",
  messagingSenderId: "619638335027",
  appId: "1:619638335027:web:b4db9d2cb7c53ab01a2546",
  measurementId: "G-L69G766KD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();