import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDR3aWsk66vsTSso0zDyuelcALCAjfoRKo",
    authDomain: "crown-db-87b32.firebaseapp.com",
    databaseURL: "https://crown-db-87b32.firebaseio.com",
    projectId: "crown-db-87b32",
    storageBucket: "crown-db-87b32.appspot.com",
    messagingSenderId: "585801532314",
    appId: "1:585801532314:web:f772c2fd76de2fdc9f3023"
  }

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//sets up a 'Sign in with Google'
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;