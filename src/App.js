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
import ContactUs from "./components/ContactUs";
import Signup from "./components/Signup";
import Calendar from "./components/Calendar";
import MerchSideBar from "./components/MerchSideBar";

// import AboutUs from "./components/AboutUs";

const LOGOUT_URL = "https://m-route-backend.onrender.com/users/logout";

const routeConfig = {
  "/": { title: "", metaDescription: "" },
  "/dashboardmanager": { title: "", metaDescription: "" },
  "/settings": { title: "", metaDescription: "" },
  "/signup": { title: "", metaDescription: "" },
  "/login": { title: "", metaDescription: "" },
  "/footer": { title: "", metaDescription: "" },
  "/reviews": { title: "", metaDescription: "" },
  "/routesplan": { title: "", metaDescription: "" },
  "/contactus": { title: "", metaDescription: "" },
  "/calendar": {title: "", metaDescription: ""},
};

function App() {
  const location = useLocation();
  const currentPath = location.pathname;

  const [authorized, setAuthorized] = useState(false);
  const [roleCheck, setRoleCheck] = useState(0);
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState("")

  const logoutUser = async () => {
    try {
      const response = await fetch(LOGOUT_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ access_token: token }),
      });

      const data = await response.json();

      if (data.status_code === 201) {
        setAuthorized(false);
        localStorage.removeItem("access_token");
        localStorage.removeItem("user_data");
      } else {
        console.log(
          data.message || "There was an error loging out, try again"
        );
      }
    } catch (error) {}
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    setToken(accessToken);
  }, []);

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

  useEffect(() => {
    console.log(userData)
  }, [userData])

  return (
    <div className="flex flex-col min-h-screen">
      {authorized ? (
        <>
          <Navbar userData ={userData} />
          <div className="flex flex-1">
            {roleCheck ? <SideBar /> : <MerchSideBar />}
            <Routes className="flex-1 ml-4">
              {roleCheck ? (
                <>
                  {/* Manager routes */}
                  <Route path="/" element={<Home />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/reviews" element={<Reviews />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/map" element={<GetLocations />} />
                  {/* <Route path="/contactus" element={<ContactUs />} /> */}
                  <Route path="/calendar" element={<Calendar  userData={userData}/>} />
                </>
              ) : (
                <>
                  {/* Merchandiser routes */}
                  <Route path="/" element={<Home authorized={authorized} />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/contactus" element={<ContactUs />} />
                  <Route path="/calendar" element={<Calendar  userData={userData} />} />
                </>
              )}
              <Route path="/login" element={<Login setRoleCheck={setRoleCheck} setAuthorized={setAuthorized} setUserData={setUserData} />} />
            </Routes>

          </div>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Home authorized={authorized} />} />
          <Route
            path="/login"
            element={<Login setRoleCheck={setRoleCheck} setAuthorized={setAuthorized} setUserData={setUserData} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      )}
      <Footer />
    </div>
  );
}

export default App;