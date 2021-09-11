import firebase from "firebase";

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_FIREBASE_KEY}`,
    authDomain: "fake-list.firebaseapp.com",
    projectId: "fake-list",
    storageBucket: "fake-list.appspot.com",
    messagingSenderId: "789839020086",
    appId: "1:789839020086:web:e8f3fbf9d82514cf2f9897"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export {db};