import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { ResponsiveAppBar as Navbar } from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  const pages = ["Home", "Store", "About", "Cart"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  return (
    <>
      <Navbar pages={pages} settings={settings} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
