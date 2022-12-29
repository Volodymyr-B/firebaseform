import { db } from "./../firebase/firebase";
import { collection } from "firebase/firestore";

export const usersCollection = collection(db, "users");
