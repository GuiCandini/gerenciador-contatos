import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJHrMoHa0nT1ylMdQdVcfCz6SIRuht1As",
  authDomain: "my-task-88191.firebaseapp.com",
  projectId: "my-task-88191",
  storageBucket: "my-task-88191.appspot.com",
  messagingSenderId: "720625515484",
  appId: "1:720625515484:web:2d795763983c77d9b3ad19"
};

//app => objeto com todas as configurações do firebase
export const app = initializeApp(firebaseConfig);
// auth => objeto com as configurações de authentication
export const auth = getAuth(app);
// db => objeto com as configurações do Firestore
export const db = getFirestore(app);