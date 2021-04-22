import Rebase from "re-base";
import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
    // you add param from firebase console
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
});
const base = Rebase.createClass(firebase.database());
export {firebaseApp};
export default base;
