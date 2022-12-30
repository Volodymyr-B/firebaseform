import { Route, Routes } from "react-router-dom";

import { Header } from "./components/header/Header";
import { routes } from "./constants/routes";
import { Footer } from "./components/footer/Footer";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map(({ path, Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
