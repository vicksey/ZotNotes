//import logo from "./logo.svg";
import "./style.css";
import "./App.css";
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import * as React from "react";
import "./index.css";
import { Route, Routes, useNavigate, NavLink } from "react-router-dom";
import { Projects } from "./Projects.jsx";
import { Messages } from "./Messages.jsx";
import { Sidebar } from "./Sidebar.jsx";

import { Notepage } from "./Notepage.jsx";

import { Profile } from "./Profile.jsx";

import { Navbar } from "./Navbar.jsx";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithRedirect } from "firebase/auth";

import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";

// import infoData from './textbook_info.json';
// import urlsData from './textbook_urls.json';

const firebaseConfig = {
  apiKey: "AIzaSyCI3tQUmSFRVVtTU7dgrTdWrMqIwkMgpKs",
  authDomain: "zotnotes-a6fd3.firebaseapp.com",
  databaseURL: "https://zotnotes-a6fd3-default-rtdb.firebaseio.com",
  projectId: "zotnotes-a6fd3",
  storageBucket: "zotnotes-a6fd3.appspot.com",
  messagingSenderId: "353487217866",
  appId: "1:353487217866:web:6d2bef91e059ed40714033",
  measurementId: "G-J1M4FKNK3Q"
}; 

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const retrieveCollection = async () => {
  const q = query(collection(db, "textbookUrls"));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
};

const initializeFirebase = () => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  /*
  getRedirectResult(auth)
   .then((result) => {
     // This gives you a Google Access Token. You can use it to access Google APIs.
     const credential = GoogleAuthProvider.credentialFromResult(result);
     const token = credential.accessToken;

     // The signed-in user info.
     const user = result.user;
     // IdP data available using getAdditionalUserInfo(result)
     // ...
   }).catch((error) => {
     // Handle Errors here.
     const errorCode = error.code;
     const errorMessage = error.message;
     // The email of the user's account used.
     const email = error.customData.email;
     // The AuthCredential type that was used.
     const credential = GoogleAuthProvider.credentialFromError(error);
     // ...
   });*/

  
  // Use separate collections for infoData and urlsData
  // const infoCollection = collection(db, 'infoData');
  // const urlsCollection = collection(db, 'urlsData');

  console.log(firebaseConfig)

/*
  infoData.forEach(async (data) => {
    try {
      const docRef = await addDoc(infoCollection, data);
      console.log('InfoData document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding InfoData document: ', e);
    }
  });

  urlsData.forEach(async (data) => {
    try {
      const docRef = await addDoc(urlsCollection, data);
      console.log('UrlsData document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding UrlsData document: ', e);
    }

  });
*/
};


// signInWithRedirect(auth, provider);
function App() {
  const [name, setName] = useState('')
  const [pfp, setPfp] = useState('')
  const [id, setId] = useState('')  

  useEffect(() => {
    const provider = new GoogleAuthProvider();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        setName(user.displayName)
        setPfp(user.photoURL)
        setId(user.uid)
        console.log("uid", user);
        Object.keys(bigObject).forEach((key:string)=>{
          console.log(bigObject[key]);
          });
        retrieveCollection()
      } else {
        // User is signed out
        signInWithRedirect(auth, provider);
        console.log("user is logged out");
      }
    });
  }, []);

  return (
    <>
      <div className={"app-container"}>
        <Navbar photo={pfp} name={name} />
        <div className="app-content">
          <Sidebar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Projects id={id}/>
                  <Messages />
                </>
              }
            ></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/notepage" element={<Notepage />}></Route>
            <Route path="/course/:id" element={<Notepage />}></Route>
            </Routes>
        </div>
      </div>
      {/* <script src="./script.js"></script> */}
    </>
  );
}

export default App;
