import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";

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
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-1">
        <SideBar />
        <Routes className="flex-1">
          <Route path="/dashboardmanager" element={<Dashboard />} />
          <Route path="/settingspage" element={<Settings />} />
          {/* Add other routes here */}
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
