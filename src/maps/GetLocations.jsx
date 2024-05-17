import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";

const LOCATIONS_URL = "https://m-route-backend.onrender.com/users/locations";
const USERS_URL = "https://m-route-backend.onrender.com/users";
const ROUTE_PLANS_URL = "https://m-route-backend.onrender.com/users/route-plans";

const containerStyle = {
  width: "1250px",
  height: "800px",
  left: "257px",
  top: "73px",
  position: "absolute"
};

const center = {
  lat: 1.2921,
  lng: 36.8219,
};

const GetLocations = () => {
  const [locations, setLocations] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const [userLocations, setUserLocations] = useState([]);
  const [userId, setUserId] = useState('');
  const [assignedMerchandisers, setAssignedMerchandisers] = useState([]);

  useEffect(() => {

    const accessToken = localStorage.getItem("access_token");
    const userData = localStorage.getItem("user_data");
    setUserId(JSON.parse(userData.id))
        
    if (!accessToken) {
      setError("Access token is missing. Please log in.");
      return;
    }

    setToken(JSON.parse(accessToken));

    const intervalId = setInterval(() => {
      fetchLatestLocations();
      fetchUsersData();
    }, 200000);

    return () => clearInterval(intervalId);
  }, []);

  const getRoutePlans = async () => {
    const response = await fetch(ROUTE_PLANS_URL, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    const data = await response.json();

    if (data.status_code === 200) {
      const merchandisersList = data.message.filter(manager => manager.manager_id === userId);
      setAssignedMerchandisers(merchandisersList.merchandiser_id);
    } else if (data.status_code === 400 || data.status_code === 404) {
      setError(data.message);
    } else {
      console.log(data.message);
      setError("Failed to get routes");
    }
  };

  useEffect(() => {
    getRoutePlans();
  }, []);

  const isRecentTimestamp = timestamp => {
    const THIRTY_MINUTES = 30 * 60 * 1000;
    const currentTime = new Date().getTime();
    const locationTime = new Date(timestamp).getTime();
    return currentTime - locationTime <= THIRTY_MINUTES;
  };

  useEffect(() => {
    const matchedUserLocations = users.map(user => {
      const location = locations.find(loc => loc.merchandiser_id === user.id);
      if (location) {
        
        return {
          id: user.id,
          firstName: user.first_name,
          lastName: user.last_name,
          username: user.username,
          role: user.role,
          latitude: location.latitude,
          longitude: location.longitude,
          timestamp: location.timestamp
        };
      }
      return null;
    }).filter(userLocation => userLocation !== null);

    setUserLocations(matchedUserLocations);
  }, []);

  const fetchLatestLocations = async () => {
    const response = await fetch(LOCATIONS_URL, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();

    if (data.status_code === 200) {
      setLocations(data.message);
    } else if (data.status_code === 400 || data.status_code === 404) {
      setError(data.message);
    } else if (data.status_code === 500) {
      console.log(data.message)
      setError("Server error, try again");
    } else {
      console.log(data)
      setError("System experiencing a problem, please try again later.");
    }
  };

  const fetchUsersData = async () => {
    const response = await fetch(USERS_URL, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })

    const data = await response.json();

    if (data.status_code === 200) {
      const merchandisers = data.message.filter(user => (user.role === "merchandiser") && (user.status === "active"));
      setUsers(merchandisers);
    } else if (data.status_code === 404) {
      setError(data.message || "Failed to fetch users.");
    } else {
      setError("Failed to fetch users.")
    }
  }

  return (
    <div>
      {error && <p>{error}</p>}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        scrollWheelZoom={true}
      >
        {userLocations
          .filter(location => assignedMerchandisers.includes(location.id))
          .filter(location => isRecentTimestamp(location.timestamp))
          .map(location => (
            <Marker
              key={location.id}
              position={{ lat: location.latitude, lng: location.longitude }}
            >
              <InfoWindow>
                <div>{location.firstName}</div>
              </InfoWindow>
            </Marker>
          ))}
      </GoogleMap>
    </div>
  );
}

export default GetLocations;



