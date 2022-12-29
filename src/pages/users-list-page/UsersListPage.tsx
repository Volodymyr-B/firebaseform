import { Box, Grid } from "@mui/material";
import { useEffect } from "react";
import { Error } from "../../components/error/Error";
import { Loader } from "../../components/loader/Loader";
import { User } from "../../components/user/User";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { UsersFetch } from "../../store/users-slice/users-action";

export const UsersListPage = () => {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(UsersFetch());
  }, []);

  if (isLoading) return <Loader />;
  if (error) return <Error />;
  return (
    <Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
        sx={{ justifyContent: "center" }}
      >
        {users?.map((user) => (
          <Grid key={user.uid} item>
            <User user={user} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
