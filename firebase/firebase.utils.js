import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBXhJ148BGIz8MoLomHSNp8HZTWwGvyoYQ",
    authDomain: "crwn-db-14681.firebaseapp.com",
    projectId: "crwn-db-14681",
    storageBucket: "crwn-db-14681.appspot.com",
    messagingSenderId: "1033059024539",
    appId: "1:1033059024539:web:69dd379859d9362dd1903e",
    measurementId: "G-TDX5733Y0L"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log(error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;