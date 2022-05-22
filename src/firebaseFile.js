import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCCEGoXblOHwEBndb2dYSlHnjx50b83bE4",
    authDomain: "twitter-clone-248e2.firebaseapp.com",
    projectId: "twitter-clone-248e2",
    storageBucket: "twitter-clone-248e2.appspot.com",
    messagingSenderId: "597138881483",
    appId: "1:597138881483:web:e938f5b8efac64d85f144e",
    measurementId: "G-PVCRV7KD3J"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;