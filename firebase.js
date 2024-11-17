// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyIdpkvGQxxnfIB5i0jeZYU7IRH_Nf1kQ",
  authDomain: "dog-project-31aff.firebaseapp.com",
  projectId: "dog-project-31aff",
  storageBucket: "dog-project-31aff.appspot.com",
  messagingSenderId: "1083093650143",
  appId: "1:1083093650143:web:f4997f742d0c88ce80776a",
  measurementId: "G-0C7CLP91LQ"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);