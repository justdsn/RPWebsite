import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdGTWvZEiZqF1VAnkgwTIHcaHQOUVh2co",
  authDomain: "footprintlk-rpwebsite.firebaseapp.com",
  projectId: "footprintlk-rpwebsite",
  storageBucket: "footprintlk-rpwebsite.firebasestorage.app",
  messagingSenderId: "56446676407",
  appId: "1:56446676407:web:b589157ee04528938bcc32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
