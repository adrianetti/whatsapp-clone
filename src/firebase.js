import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA516-pYjc_ALH68jNczl9iyIrHc4FQcpc",
    authDomain: "whatsapp-clone-adrian.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-adrian.firebaseio.com",
    projectId: "whatsapp-clone-adrian",
    storageBucket: "whatsapp-clone-adrian.appspot.com",
    messagingSenderId: "1010654677797",
    appId: "1:1010654677797:web:0dee7d8e53688fe57528cc",
    measurementId: "G-KSD79D6QL2"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, storage, provider };

export default db;