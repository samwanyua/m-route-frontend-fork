// import { useState, useEffect } from "react";
// import { jwtDecode } from "jwt-decode";


import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import GetLocations from "./GetLocations";


// const ROUTE_PLANS_URL = "https://m-route-backend.onrender.com//users/route-plans";

const Map = () => {


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



