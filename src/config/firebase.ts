import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDsjjJgZ6aIrbhCk1QrgrLqN-vqs7GvwfQ",
    authDomain: "sonni-group.firebaseapp.com",
    projectId: "sonni-group",
    storageBucket: "sonni-group.appspot.com",
    messagingSenderId: "233108507749",
    appId: "1:233108507749:web:3b9e35d04bd42756f70a8c",
    measurementId: "G-3HR31Q6PDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
const analytics = getAnalytics(app);
