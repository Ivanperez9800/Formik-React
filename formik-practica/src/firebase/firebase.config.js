import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDX7cQnafNdHnm3Y8OgOq7YPOGWn36ZdgM",
  authDomain: "currifacil-13013.firebaseapp.com",
  projectId: "currifacil-13013",
  storageBucket: "currifacil-13013.appspot.com",
  messagingSenderId: "151326358232",
  appId: "1:151326358232:web:f1faa700e5f223c8c0b5ad"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
