import { Box, Button, Grid } from "@mui/material";
import { useEffect } from "react";
import { User } from "../../components/user/User";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { UsersFetch } from "../../store/users-slice/users-action";

export const UsersListPage = () => {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector((state) => state.users);

  const refreshHandler = () => {
    dispatch(UsersFetch());
  };

  useEffect(() => {
    dispatch(UsersFetch());
  }, []);

  if (isLoading) return <div>loading</div>;
  if (error) return <div>error</div>;
  return (
    <Box>
      <Button
        sx={{ marginBottom: "20px" }}
        variant="contained"
        onClick={refreshHandler}
      >
        refresh
      </Button>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {users?.map((user) => (
          <Grid key={user.uid} item xs={2} sm={4} md={4}>
            <User user={user} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
