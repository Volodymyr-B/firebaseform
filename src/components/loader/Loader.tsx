import { Backdrop, CircularProgress } from "@mui/material";

export const Loader = () => {
  return (
    <Backdrop sx={{ color: "#fff", marginTop: "60px" }} open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
