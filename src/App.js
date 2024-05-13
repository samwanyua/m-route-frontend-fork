import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import Home from "./components/Home";
import Reviews from "./components/Reviews";
import Map from "./maps/Map";



const routeConfig = {
  "/": { title: "", metaDescription: "" },
  "/dashboardmanager": { title: "", metaDescription: "" },
  "/settingspage": { title: "", metaDescription: "" },
  "/signup": { title: "", metaDescription: "" },
  "/login": { title: "", metaDescription: "" },
  "/footer": { title: "", metaDescription: "" },
  "/reviews": {title: "", metaDescription: ""},
  "/routesplan": {title: "", metaDescription: ""},
  // "/": {title: "", metaDescription: ""}



};

function App() {
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  useEffect(() => {
    const { title, metaDescription } = routeConfig[currentPath] || {};

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
  }, [currentPath]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-1">
        {currentPath !== '/home' && <SideBar />}
        <Routes className="flex-1">

        <Route path="/" element={<Home />} />
        <Route path="/dashboardmanager" element={<Dashboard />} />
        <Route path="/settingspage" element={<Settings />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path = "/map" element = {<Map /> } />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;



