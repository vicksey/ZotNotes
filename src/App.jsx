//import logo from "./logo.svg";
import "./style.css";
import "./App.css";
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

import { collection, query, where, getDocs } from "firebase/firestore";

// import infoData from './textbook_info.json';
// import urlsData from './textbook_urls.json';

 
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

collectionName = "textbookUrls"

const retrieveCollectionAsJson = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));

    const jsonData = [];
    querySnapshot.forEach((doc) => {
      jsonData.push({ id: doc.id, ...doc.data() });
    });

    return jsonData;
  } catch (error) {
    console.error('Error retrieving collection:', error);
    return null;
  }
};

const writeJsonToFile = (jsonData, fileName) => {
  // Convert the JSON data to a string
  const jsonString = JSON.stringify(jsonData, null, 2);

  // Save the string to a JSON file
  const fs = require('fs');
  fs.writeFileSync(fileName, jsonString);

  console.log(`JSON data written to ${fileName}`);
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
