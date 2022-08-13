import React from 'react';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import firebaseConfig from "./firebase.config";

// Initialize Firebase

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);

}


export default initializeAuthentication;

