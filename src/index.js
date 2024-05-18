import React from "react";
import ReactDOM from "react-dom/client";
import { LoadScript } from "@react-google-maps/api"; 
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createClient } from '@supabase/supabase-js';
import { SessionContextProvider } from '@supabase/auth-helpers-react';

const supabase = createClient(
  "https://tejshonionerqwildqba.supabase.co",
   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlanNob25pb25lcnF3aWxkcWJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2MTg2NTIsImV4cCI6MjAzMTE5NDY1Mn0.BdFAHMw_FOoYwlgMEzQQQReWzqSFDMgieCeRgL2KkUU"
  );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoadScript

      googleMapsApiKey = {process.env.REACT_APP_GOOGLE_MAPS_API_KEY}

    >
      <BrowserRouter>
        <SessionContextProvider supabaseClient={supabase}>
          <App />
        </SessionContextProvider>
      </BrowserRouter>
    </LoadScript>
  </React.StrictMode>
);
