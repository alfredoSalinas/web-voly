import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBdLZrpTPVLoxBQ8lkFVtX55NcFIgM3He0",
    authDomain: "voleibol-sucre.firebaseapp.com",
    projectId: "voleibol-sucre",
    storageBucket: "voleibol-sucre.appspot.com",
    messagingSenderId: "534953608065",
    appId: "1:534953608065:web:9b70e45b919babc0f79e80"
}

const app = firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()