import Rebase from "re-base";
import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBMuNhWnFCaVvv6rgIyNmk0dnTm6a4fJCI",
    authDomain: "getdataai.firebaseapp.com",
    databaseURL: "https://getdataai.firebaseio.com",
    projectId: "getdataai",
    storageBucket: "",
    messagingSenderId: "368706777855",
    appId: "1:368706777855:web:230bb006041bcf82"
});
const base = Rebase.createClass(firebase.database());
export {firebaseApp};
export default base;