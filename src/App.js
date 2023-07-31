import Home from "./components/Home.js";
import Menu from "./components/Menu.js";
import NavBar from "./components/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import { SidebarContext } from "./components/Sidebar/SidebarContext";
import React, { useContext } from "react";

function App() {
  const { isSidebarOpen } = useContext(SidebarContext);
  return (
    <Router>
      <div className="container-fluid g-0">
        <div className="row">
          <NavBar />
        </div>
        <div className="row">
          <div className="col-2" style={{ height: "100vh" }}>
            <Sidebar />
          </div>
          <div className="col me-4 ms-4">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/Menu" element={<Menu />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
