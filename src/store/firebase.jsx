import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAeVVBkR1sNGLN7XL1Vp96diiW8N7tD2f0",
    authDomain: "dynamic-reef-414611.firebaseapp.com",
    projectId: "dynamic-reef-414611",
    storageBucket: "dynamic-reef-414611.appspot.com",
    messagingSenderId: "76877885190",
    appId: "1:76877885190:web:938bced58c2e4040c0f887",
    measurementId: "G-35502CDS6X",
    databaseURL:"https://dynamic-reef-414611-default-rtdb.firebaseio.com"
  };

  export const app=initializeApp(firebaseConfig);