import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

const routeConfig = {
  "/": { title: "", metaDescription: "" },
  "/dashboardmanager": { title: "", metaDescription: "" },
  "/settingspage": { title: "", metaDescription: "" },
  "/signup": { title: "", metaDescription: "" },
  "/login": { title: "", metaDescription: "" },
  "/footer": { title: "", metaDescription: "" },
};

function App() {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const { title, metaDescription } = routeConfig[pathname] || {};

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <div>
      <Navbar />

      <div className="flex">
      <SideBar />
        <Routes>
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="/dashboardmanager" element={<Dashboard />} />
          <Route path="/settingspage" element={<Settings />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/footer" element={<Footer/>} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
