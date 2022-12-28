import { Route, Routes } from "react-router-dom";

import { Header } from "./components/header/Header";
import { routes } from "./constants/routes";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {routes.map(({ path, Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      </Routes>
    </>
  );
}

export default App;
