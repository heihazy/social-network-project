import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDIee8qkY6RVGhDLJIIQ6ITbo2sGdXqiTA",
  authDomain: "social-network-project-15c0d.firebaseapp.com",
  databaseURL: "https://social-network-project-15c0d.firebaseio.com",
  projectId: "social-network-project-15c0d",
  storageBucket: "social-network-project-15c0d.appspot.com",
  messagingSenderId: "770651416998",
  appId: "1:770651416998:web:22818e2aaa8468a31ec767",
  measurementId: "G-K0ZK2S957Y",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

//sign in with google
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
