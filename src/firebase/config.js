import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAO18eRnUbVy2lZ5QtmEjgdLU5JRBZbRSY",
  authDomain: "gerenciador-contatos.firebaseapp.com",
  projectId: "gerenciador-contatos",
  storageBucket: "gerenciador-contatos.appspot.com",
  messagingSenderId: "956038790529",
  appId: "1:956038790529:web:32362e8aa8c0433ca2fc80"
};

//app => objeto com todas as configurações do firebase
export const app = initializeApp(firebaseConfig);
// auth => objeto com as configurações de authentication
export const auth = getAuth(app);
// db => objeto com as configurações do Firestore
export const db = getFirestore(app);