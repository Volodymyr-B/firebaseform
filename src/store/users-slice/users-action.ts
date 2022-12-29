import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { AppDispatch } from "./../store";
import {
  usersFetching,
  usersFetchingSuccess,
  usersFetchingError,
} from "./users-slice";

export const UsersFetch = () => async (dispatch: AppDispatch) => {
  const usersCollection = collection(db, "users");
  try {
    dispatch(usersFetching());
    const response = await getDocs(usersCollection);
    const usersData: any = response.docs.map((doc) => doc.data());
    dispatch(usersFetchingSuccess(usersData));
  } catch (e) {
    dispatch(usersFetchingError("error"));
  }
};
