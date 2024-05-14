import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const LOCATIONS_URL = "https://m-route-backend.onrender.com/users/locations";
const USERS_URL = "https://m-route-backend.onrender.com/user/users";
const ROUTE_PLANS_URL = "https://m-route-backend.onrender.com//users/route-plans";

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
        if (!accessToken) {
            setError("Access token is missing. Please log in.");
            return;
        }

        setToken(JSON.parse(accessToken));

        const decodedToken = jwtDecode(accessToken);
        if (decodedToken) {
            setUserId(decodedToken.user_id);
        } else {
            setError("Failed to decode access token.");
            return;
        }

        fetchLatestLocations();
        fetchUsersData();

        // const intervalId = setInterval(() => {
        //     fetchLatestLocations();
        //     fetchUsersData();
        // }, 200000);

        // return () => clearInterval(intervalId);
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
        <div 
        className="ma-p" 
        style={{ left: "350px", top: "100px" }}
        >
            <MapContainer
                center={[1.2921, 36.8219]}
                zoom={20}
                style={{ height: "500px", width: "500px" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
                <p>{error}</p>
                {userLocations
                    .filter(location => assignedMerchandisers.includes(location.id))
                    .filter(location => isRecentTimestamp(location.timestamp))
                    .map(location => (
                        <Marker key={location.id} position={[location.latitude, location.longitude]}>
                            <Popup>{location.firstName}</Popup>
                        </Marker>
                    ))}
                <ChangeCenter />
                <DetectMapClick />
            </MapContainer>
        </div>
    );
}

const ChangeCenter = () => {
    const map = useMap();
    const center = [1.2921, 36.8219];
    map.setView(center);
    return null;
}

const DetectMapClick = () => {
    const navigate = useNavigate();
    useMapEvents({
        click: e => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
    });
}

export default GetLocations;


