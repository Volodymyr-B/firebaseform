import { AppBar, Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <>
      <AppBar position="static" sx={{ opacity: "70%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "30px",
          }}
        >
          <Typography>All rights reserved 2022</Typography>
        </Box>
      </AppBar>
    </>
  );
};
