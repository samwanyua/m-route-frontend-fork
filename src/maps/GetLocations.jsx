import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";

const LOCATIONS_URL = "https://m-route-backend.onrender.com/users/locations";
const USERS_URL = "https://m-route-backend.onrender.com/users";
const ROUTE_PLANS_URL = "https://m-route-backend.onrender.com/users/route-plans";

const containerStyle = {
  width: "100%",
  height: "100%",
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
  const [selectedLocation, setSelectedLocation] = useState(null);



  useEffect(() => {
    
    const accessToken = localStorage.getItem('access_token');
    const user = localStorage.getItem('user_data');

    if (accessToken) {
      setToken(JSON.parse(accessToken));
    }

    if (user) {
      const parsedUser = JSON.parse(user);
      if (parsedUser && parsedUser.id) {
        setUserId(parsedUser.id);

      } else {
        console.error('Invalid user data');

      }
    } else {
      console.error('No user data found');
    }

    const intervalId = setInterval(() => {
      fetchLatestLocations();
    }, 5000);

    fetchUsersData();
    getRoutePlans();
    
    return () => clearInterval(intervalId);
  }, [token, userId]);



  const getRoutePlans = async () => {
    try {
      const response = await fetch(ROUTE_PLANS_URL, {
        method: "GET",
        headers: { 
          "Authorization": `Bearer ${token}` 
        }
      });
      const data = await response.json();

      if (data.status_code === 200) {
        const merchandisersList = data.message.filter(manager => manager.manager_id === userId);
        setAssignedMerchandisers(merchandisersList.map(manager => manager.merchandiser_id));

      } else {
        setError(data.message || "Failed to get routes");
      }

    } catch (error) {
      setError("System experiencing a problem, please try again later.");
    }
  };

  const isRecentTimestamp = timestamp => {
    const THIRTY_MINUTES = 300 * 60 * 1000;
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
  }, [locations]);

  const fetchLatestLocations = async () => {
    try {
      const response = await fetch(LOCATIONS_URL, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      const data = await response.json();

      if (data.status_code === 200) {
        setLocations(data.message);

      } else {
        setError(data.message || "Failed to fetch locations.");
      }
    } catch (error) {
      setError("System experiencing a problem, please try again later.");
    }
  };

  const fetchUsersData = async () => {
    try {
      const response = await fetch(USERS_URL, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      const data = await response.json();


      if (data.status_code === 200) {
        const merchandisers = data.message.filter(user => user.role === "merchandiser" && user.status === "active");
        setUsers(merchandisers);

      } else {
        setError(data.message || "Failed to fetch users.");
      }
    } catch (error) {
      setError("System experiencing a problem, please try again later.");
    }
  };

  return (
    <div className="flex flex-col h-screen w-full">
      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
      <div className="flex-grow">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          {userLocations
            .filter(location => assignedMerchandisers.includes(location.id))
            .filter(location => isRecentTimestamp(location.timestamp))
            .map(location => (
              <Marker
                key={location.id}
                position={{ lat: location.latitude, lng: location.longitude }}
                onClick={() => setSelectedLocation(location)}
              />
            ))}

          {selectedLocation && (
            <InfoWindow
              position={{ lat: selectedLocation.latitude, lng: selectedLocation.longitude }}
              onCloseClick={() => setSelectedLocation(null)}
            >
              <div className="p-2 text-sm">
                <h4 className="font-bold">{selectedLocation.firstName} {selectedLocation.lastName}</h4>
                <p>Username: {selectedLocation.username}</p>
                <p>Role: {selectedLocation.role}</p>
                <p>Last update: {new Date(selectedLocation.timestamp).toLocaleString()}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    </div>
  );
}

export default GetLocations;



