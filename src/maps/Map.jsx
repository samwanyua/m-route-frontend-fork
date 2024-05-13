import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";



import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import GetLocations from "./GetLocations";

const ROUTE_PLANS_URL = "https://m-route-backend.onrender.com//users/route-plans"

const Map = () => {

  const [error, userLocations] = GetLocations();
  const [userId, setUserId] = useState('');
  const [assignedMerchandisers, setAssignedMerchandisers] = useState([]);
  const [token, setToken] = useState('');
  const [fetchError, setFetchError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const getRoutePlans = async () =>{

    const response = await fetch(ROUTE_PLANS_URL, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })

    const data = await response.json();

    if (data.status_code === 200){
      const merchandisersList = data.message.filter(manager => manager.manager_id === userId);
      setAssignedMerchandisers(merchandisersList.merchandiser_id);

    }else if (data.status_code === 400 || data.status_code === 404){
      setFetchError(data.message);

    }else{
      console.log(data.message);
      setFetchError("Failed to get routes");
    }
  }


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
    <div className="ma-p" style={{ height: "100vh", left : "200px", top : "200px" }}>
      <MapContainer center={[1.2921, 36.8219]} zoom={10} style={{ height: "100%" }}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
        {userLocations
          .filter((location) => assignedMerchandisers.includes(location.id))
          .filter((location) => isRecentTimestamp(location.timestamp)) 
          .map((location) => (
            <div>
                <p>{error}</p>
                <p>{fetchError}</p>
                <Marker key={location.id} position={[location.latitude, location.longitude]}>
                    <Popup>{location.firstName}</Popup>
                </Marker>
            </div>
          ))}
      </MapContainer>
    </div>
  );
};


export default Map;



