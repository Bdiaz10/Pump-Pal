// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATOFeC81WfkOYIBw0D82sx0aG446xrgZo",
  authDomain: "workoutapp-5de7d.firebaseapp.com",
  projectId: "workoutapp-5de7d",
  storageBucket: "workoutapp-5de7d.appspot.com",
  messagingSenderId: "890030525818",
  appId: "1:890030525818:web:013ea65d21cba094835ac3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


