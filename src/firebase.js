import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCI3tQUmSFRVVtTU7dgrTdWrMqIwkMgpKs",
  authDomain: "zotnotes-a6fd3.firebaseapp.com",
  databaseURL: "https://zotnotes-a6fd3-default-rtdb.firebaseio.com",
  projectId: "zotnotes-a6fd3",
  storageBucket: "zotnotes-a6fd3.appspot.com",
  messagingSenderId: "353487217866",
  appId: "1:353487217866:web:6d2bef91e059ed40714033",
  measurementId: "G-J1M4FKNK3Q",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
