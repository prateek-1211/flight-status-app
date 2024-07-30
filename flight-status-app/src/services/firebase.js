// src/services/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getMessaging } from 'firebase/messaging';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDy3YpNhFbSLvEZKloGN_RNdOc3-vh1A7o",
    authDomain: "flight-status-app-43e14.firebaseapp.com",
    projectId: "flight-status-app-43e14",
    storageBucket: "flight-status-app-43e14.appspot.com",
    messagingSenderId: "150664204879",
    appId: "1:150664204879:web:dfabdabded0f3f4974903a",
    measurementId: "G-E3TLEJ7X90",
    databaseURL: "https://flight-status-app-43e14-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const messaging = getMessaging(app);

function Firebase() {
    const signupUser = () => {
        createUserWithEmailAndPassword(
            auth,
            "kannubhargav386@gmail.com",
            "Kannu@123"
        ).then((value) => console.log(value));
    };

    return (
        <div className='App'>
            <button onClick={signupUser}>Create User</button>
        </div>
    );
}

// Export Firebase components
export { app, auth, db, storage, messaging, Firebase };
