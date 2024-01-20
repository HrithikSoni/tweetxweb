import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlTkBNgjMxQVH6aGps3yZ8rC9CgjYMwSI",
  authDomain: "tweeterweb-1cae2.firebaseapp.com",
  databaseURL: "https://tweeterweb-1cae2-default-rtdb.firebaseio.com",
  projectId: "tweeterweb-1cae2",
  storageBucket: "tweeterweb-1cae2.appspot.com",
  messagingSenderId: "164302518060",
  appId: "1:164302518060:web:967ae27eecbdafdd689e89",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
