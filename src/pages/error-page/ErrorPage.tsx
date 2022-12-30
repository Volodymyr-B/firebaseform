import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();
  const goHome = () => navigate("/", { replace: true });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <Typography>Oops, looks like this page doesn't exist</Typography>
      <Button variant="contained" onClick={goHome}>
        Home
      </Button>
    </Box>
  );
};
