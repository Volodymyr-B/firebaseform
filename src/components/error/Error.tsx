import { Box, Button, Typography } from "@mui/material";
import { useAppDispatch } from "../../hooks/redux";
import { UsersFetch } from "../../store/users-slice/users-action";

export const Error = () => {
  const dispatch = useAppDispatch();
  const refreshHandler = () => {
    dispatch(UsersFetch());
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <Typography>Oops, something went wrong </Typography>
      <Button
        sx={{ marginBottom: "20px" }}
        variant="contained"
        onClick={refreshHandler}
      >
        refresh
      </Button>
    </Box>
  );
};
