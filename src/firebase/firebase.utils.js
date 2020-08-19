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


export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }  

  return userRef;

};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//sets up a 'Sign in with Google'
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;