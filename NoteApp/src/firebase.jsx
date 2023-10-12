
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCs8w7U30f8dAl3mc9oJ7HvOtNHO2BXYtA",
  authDomain: "noteapp-ad553.firebaseapp.com",
  projectId: "noteapp-ad553",
  storageBucket: "noteapp-ad553.appspot.com",
  messagingSenderId: "424085817491",
  appId: "1:424085817491:web:68e890c6531ea346242566"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
