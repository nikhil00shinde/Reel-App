import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCBGRFAmJbzzvYet7s4RtFTovWekVJtJkc",
	authDomain: "reel-62ffc.firebaseapp.com",
	projectId: "reel-62ffc",
	storageBucket: "reel-62ffc.appspot.com",
	messagingSenderId: "159320398656",
	appId: "1:159320398656:web:0f6eb37551cddb4587b8a5",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();

export const database = {
	users: firestore.collection("users"),
	//ye hamari post ke liye, jab bhi hum koi post karenge sath mei time bhi toh aage sort karne ke liye on the basis of time that is latest post and old post
	getTimeStamp: firebase.firestore.FieldValue.getTimeStamp,
};

export const storage = firebase.storage();
