import { addDoc } from "firebase/firestore";
import { IUser } from "../interfaces/IUser";
import { usersCollection } from "./users-data-ref";

export const createUser = async (data: IUser) => {
  await addDoc(usersCollection, data);
};
