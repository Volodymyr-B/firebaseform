import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Container
        sx={{
          bgcolor: "rgba(114, 114, 114, 0.2)",
          display: "flex",
          justifyContent: "center",
          paddingY: "20px",
          minHeight: "90vh",
        }}
      >
        <Outlet />
      </Container>
    </>
  );
};
