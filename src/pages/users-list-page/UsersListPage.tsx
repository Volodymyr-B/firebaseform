import { useEffect } from "react";
import { User } from "../../components/user/User";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { UsersFetch } from "../../store/users-slice/users-action";

export const UsersListPage = () => {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(UsersFetch());
  }, []);

  return (
    <div>
      {users?.map((user) => (
        <User user={user} />
      ))}
    </div>
  );
};
