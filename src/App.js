
import "./App.css";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import pages from "./Utils/pages";
import Layout from "./Layouts/Layout/Layout";
import Menu from "./Pages/Menu/Menu";
import Orders from "./Pages/Orders/Orders";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Reservations from "./Pages/Reservations/Reservations";



const App = () => {
  return (
    <div data-testid="app-component">
      <Layout>
        <Routes>
          <Route path={pages.get("home").path} element={<Home />} />
          <Route path={pages.get("about").path} element={<About />} />
          <Route path={pages.get("menu").path} element={<Menu />} />
          <Route
            path={pages.get("reservations").path}
            element={<Reservations />}
          />
          <Route path={pages.get("orders").path} element={<Orders />} />
          <Route path={pages.get("login").path} element={<Login />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
