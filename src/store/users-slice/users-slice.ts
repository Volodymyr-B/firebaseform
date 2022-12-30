import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/IUser";

interface UsersSlice {
  users: IUser[] | null;
  isLoading: boolean;
  error: null | string;
}

const initialState: UsersSlice = {
  users: null,
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    usersFetching(state) {
      state.isLoading = true;
      state.error = null;
    },
    usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
      state.users = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    usersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { usersFetching, usersFetchingSuccess, usersFetchingError } =
  usersSlice.actions;

export default usersSlice.reducer;
