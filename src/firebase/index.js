import Firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCYthDJYGswcA3NYA0OnTWoD9PVMOY2DDQ",
  authDomain: "clone-7f1ef.firebaseapp.com",
  databaseURL: "https://clone-7f1ef.firebaseio.com",
  projectId: "clone-7f1ef",
  storageBucket: "clone-7f1ef.appspot.com",
  messagingSenderId: "831561186544",
  appId: "1:831561186544:web:0c9073a425ccd5ac2fd635",
};

const firebaseApp = Firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = Firebase.auth();
const provider = new Firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
