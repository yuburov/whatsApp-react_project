import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCgGYdOTPTXImrIWK7CCSmNAiC2PAfhTS0",
  authDomain: "whats-app-9f9ce.firebaseapp.com",
  projectId: "whats-app-9f9ce",
  storageBucket: "whats-app-9f9ce.appspot.com",
  messagingSenderId: "470394989569",
  appId: "1:470394989569:web:e09fa0e4898602320fe400",
  measurementId: "G-N4FJ7CBS25"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider};
export default db;