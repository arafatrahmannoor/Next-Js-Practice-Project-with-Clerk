import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCG2_rZPTvyJM9AUuX9vjlm9fW3JopMD6o",

    authDomain: "notion-clone-f50dd.firebaseapp.com",

    projectId: "notion-clone-f50dd",

    storageBucket: "notion-clone-f50dd.firebasestorage.app",

    messagingSenderId: "394354509416",

    appId: "1:394354509416:web:42daa7b37845172aac9ddd",
};
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
