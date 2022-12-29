import { usersCollection } from "./../../service/users-data-ref";
import { getDocs } from "firebase/firestore";
import { AppDispatch } from "./../store";
import {
  usersFetching,
  usersFetchingSuccess,
  usersFetchingError,
} from "./users-slice";

export const UsersFetch = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(usersFetching());
    const response = await getDocs(usersCollection);
    const usersData: any = response.docs.map((doc) => ({
      ...doc.data(),
      uid: doc.id,
    }));
    dispatch(usersFetchingSuccess(usersData));
  } catch (e) {
    dispatch(usersFetchingError("error"));
  }
};
