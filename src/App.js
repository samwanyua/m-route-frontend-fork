import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import Home from "./components/Home";
import Reviews from "./components/Reviews";
import Login from "./components/Login";
import Profile from "./components/Profile";
import GetLocations from "./maps/GetLocations";
import { useNavigate } from "react-router-dom";
import { navigate } from 'react-router-dom';
import ContactUs from "./components/ContactUs";
// import AboutUs from "./components/AboutUs";



const routeConfig = {
  "/": { title: "", metaDescription: "" },
  "/dashboardmanager": { title: "", metaDescription: "" },
  "/settingspage": { title: "", metaDescription: "" },
  "/signup": { title: "", metaDescription: "" },
  "/login": { title: "", metaDescription: "" },
  "/footer": { title: "", metaDescription: "" },
  "/reviews": {title: "", metaDescription: ""},
  "/routesplan": {title: "", metaDescription: ""},
  "/contactus": {title: "", metaDescription: ""},
  // "/aboutus": {title: "", metaDescription: ""},


  // "/": {title: "", metaDescription: ""}
};

function App() {
  const location = useLocation();
  const currentPath = location.pathname;

  const [authorized, setAuthorized] = useState(false); // Initial state is false


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
        {authorized && (
          <>
            <Navbar />
          </>
        )}
    <div className="flex flex-1">
        {authorized && (
          <>
            <SideBar />
          </>
        )}
        <Routes className="flex-1 ml-4">

          {authorized ? (
            <>
              <Route path="/dashboardmanager" element={<Dashboard />} />
              <Route path="/settingspage" element={<Settings />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/profile" element={<Profile />} />
              <Route path = "/map" element = {<GetLocations /> } />
              <Route path="/contactus" element={<ContactUs />} />
              {/* <Route path="/aboutus" element={<AboutUs/>} /> */}



            </>
          ) : null}
          <Route path="/" element={<Home authorized={authorized} />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<Login setAuthorized={setAuthorized} />} />

        </Routes>
      </div>
      <Footer />
    </div>
  );
}
export default App;



