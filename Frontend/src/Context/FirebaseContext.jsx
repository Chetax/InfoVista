import { createContext, useContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref } from 'firebase/database';

const FirebaseContext = createContext(null);


const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    databaseURL: process.env.REACT_APP_databaseURL
};

const FirebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(FirebaseApp);
const database = getDatabase(FirebaseApp);



export const useFirebase = () => useContext(FirebaseContext);

const signupUser = (name, email, password, setUserValue) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password)
        .then(() => {
            alert("Successful login");
            setUserValue(true);
            localStorage.setItem("Cookie",true);
            return true;
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
            return false;
        });
}

const putData = (key, data) => set(ref(database, key), data);

const singinuser = (email, password, setUserValue) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password)
        .then(() => {
            alert("Successful login");
            setUserValue(true);
            localStorage.setItem("Cookie",true);
            return true;
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
            return false;
        });
}


export const FirebaseProvider = (props) => {
    const [uservalue, setUserValue] = useState(false);

    return (
        <FirebaseContext.Provider value={{ signupUser, putData, singinuser, uservalue, setUserValue }}>
            {props.children}
        </FirebaseContext.Provider>
    );
}