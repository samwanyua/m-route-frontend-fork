import React from "react";
import ReactDOM from "react-dom";
import { LoadScript } from "@react-google-maps/api"; // Import LoadScript instead of GoogleMapProvider
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import dotenv from "dotenv";

dotenv.config();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoadScript

      googleMapsApiKey={process.env.GOOLE_MAP_API_KEY}

    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LoadScript>
  </React.StrictMode>
);


