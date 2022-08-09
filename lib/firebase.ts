import firebase from "firebase";
// Initialize Firebase
const firebaseConfig = {
    apiKey: "api-key",
    authDomain: "project-id.firebaseapp.com",
    databaseURL: "https://project-id.firebaseio.com",
    projectId: "nappen-35011",
    storageBucket: `project-id.appspot.com`,
    messagingSenderId: "sender-id",
    appId: "app-id",
    measurementId: "G-measurement-id",
};

const app = firebase.apps.length === 0
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const auth = app.auth();

const { RecaptchaVerifier } = firebase.auth;;

export { app, auth, RecaptchaVerifier };
