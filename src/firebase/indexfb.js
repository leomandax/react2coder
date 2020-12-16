import firebase from 'firebase/app'
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBP5_1HxcXXYYdmA5fFHzhaKKq6pxCrEX4",
    authDomain: "coderhouse-nike.firebaseapp.com",
    projectId: "coderhouse-nike",
    storageBucket: "coderhouse-nike.appspot.com",
    messagingSenderId: "735699226860",
    appId: "1:735699226860:web:9ddcd7ab67f73e30b2d5c9",
    measurementId: "G-FQQ5ZXLBTJ"
});

export function getFirebase() {
    return app;
}
export function getFirestore() {
    return firebase.firestore(app);
}