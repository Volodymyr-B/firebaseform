import { Backdrop, CircularProgress } from "@mui/material";

export const Loader = () => {
  return (
    <Backdrop
      sx={{ color: "rgba(114, 114, 114, 0.1)", marginTop: "60px" }}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
