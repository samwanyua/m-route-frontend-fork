import React from "react";
import ReactDOM from "react-dom";
import { LoadScript } from "@react-google-maps/api"; // Import LoadScript instead of GoogleMapProvider
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoadScript
      googleMapsApiKey="AIzaSyBMMd346uZP3ldaVhVSb9bpOy4wdMN7ffM" // Replace with your API key
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LoadScript>
  </React.StrictMode>
);
