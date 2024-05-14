
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";



import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import GetLocations from "./GetLocations";


// const ROUTE_PLANS_URL = "https://m-route-backend.onrender.com//users/route-plans";


const Map = () => {

  useEffect(() =>{

    getRoutePlans();

    const accessToken = localStorage.getItem("access_token");
    
    if (!accessToken) {

      setErrorMessage("Access token is missing. Please log in.");
        return; // Stop further execution if access token is missing
    }

    setToken(JSON.parse(accessToken));

    const decodedToken = jwtDecode(accessToken);
    if (decodedToken) {
        setUserId(decodedToken.user_id);

    } else {
      setErrorMessage("Failed to decode access token.");
        return; // Stop further execution if decoding fails
    }
  }, [])


    // Check if last location is not more than 30 mins
    const isRecentTimestamp = (timestamp) => {
        const THIRTY_MINUTES = 30 * 60 * 1000; // 30 minutes in milliseconds
        const currentTime = new Date().getTime();
        const locationTime = new Date(timestamp).getTime();
        return currentTime - locationTime <= THIRTY_MINUTES;
    };



  return (
    <div className="ma-p" style={{ height: "1000px", left : "200px", top : "200px" }}>
      <MapContainer center={[1.2921, 36.8219]} zoom={10} style={{ height: "100%" }}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
          <Marker  position={[1.2921, 36.8219]}>
              <Popup>Ouma</Popup>
          </Marker>
      </MapContainer>
    </div>
  );
};


export default Map;



