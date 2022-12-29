import { Route, Routes } from "react-router-dom";

import { Header } from "./components/header/Header";
import { routes } from "./constants/routes";

import { Container } from "@mui/material";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Container
        sx={{
          bgcolor: "rgba(114, 114, 114, 0.2)",
          display: "flex",
          justifyContent: "center",
          // alignItems: "start",
          paddingY: "20px",
          minHeight: "90vh",
        }}
      >
        <Routes>
          {routes.map(({ path, Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
