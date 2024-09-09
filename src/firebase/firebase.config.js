// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBj0cJz49ykpsDzZKATkmgIxQQEPk9SnMU",
	authDomain: "user-email-password-auth-f7f92.firebaseapp.com",
	projectId: "user-email-password-auth-f7f92",
	storageBucket: "user-email-password-auth-f7f92.appspot.com",
	messagingSenderId: "1015670771430",
	appId: "1:1015670771430:web:bc66899f7633b0234af527",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
