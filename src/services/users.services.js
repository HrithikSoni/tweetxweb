import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

class UsersDataService {
  updatePosts = (newPost, docId) => {
    return updateDoc(doc(db, "users", docId), { posts: arrayUnion(newPost) });
  };
  updateFollowingList = (userId, docId) => {
    return updateDoc(doc(db, "users", docId), {
      following: arrayUnion(userId),
    });
  };
  updateFollowingListRemove = (userId, docId) => {
    return updateDoc(doc(db, "users", docId), {
      following: arrayRemove(userId),
    });
  };
  getUser = () => {
    return getDocs(collection(db, "users"));
  };
  //   addUser = (newUser) => {
  //     return addDoc(usersCollectionRef, newUser);
  //   };
}

export default new UsersDataService();
