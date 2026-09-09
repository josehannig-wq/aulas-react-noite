// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
import { getFirestore } from "firebase/firestore";
import { initializeAuth,
    getReactNativePersistence,
    browserLocalPersistence
 } from "firebase/auth";
 import AsyncStorage from "@react-native-async-storage/async-storage";
 import { Platform } from "react-native";
 
const firebaseConfig = {
  apiKey: "AIzaSyCj6LQjNIjPbvDz3frlUUAOaX3ZKyIEHOA",
  authDomain: "primeiro-projeto-noite-83fdc.firebaseapp.com",
  projectId: "primeiro-projeto-noite-83fdc",
  storageBucket: "primeiro-projeto-noite-83fdc.firebasestorage.app",
  messagingSenderId: "367228669675",
  appId: "1:367228669675:web:05f152fb8b88d6770078ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

const persistenceMode = Platform.OS === 'Web'
? browserLocalPersistence
: getReactNativePersistence(AsyncStorage);

const auth = initializeAuth(app, {persistence: persistenceMode});
export {db, auth}
