import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
  apiKey: "AIzaSyC1sj9JM0ZaMO7xsSi1S5DVJ_zxVEdrEx8",
  authDomain: "whats-app-clone-31566.firebaseapp.com",
  projectId: "whats-app-clone-31566",
  storageBucket: "whats-app-clone-31566.appspot.com",
  messagingSenderId: "771988708438",
  appId: "1:771988708438:web:8b99cec4314f726e52aff7",
  measurementId: "G-Z2P8M0BXVL"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
