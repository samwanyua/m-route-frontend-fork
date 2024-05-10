import { useState, useEffect } from "react";

const LOCATION_URL = "https://m-route-backend.onrender.com/users/locations";

const Location = (defaultLocation = null) =>{

    const [isLoading, setIsLoading] = useState(false);
    const [position, setPosition] = useState(defaultLocation);
    const [error, setError] = useState("");
    const [token, setToken] = useState("");
    const [userId, setUserId] = useState(0);
    const [success, setSuccess] = useState("")

    useEffect(() =>{

        const accessToken = localStorage.getItem("access_token");
        
        if (!accessToken) {
            setError("Access token is missing. Please log in.");
            return; // Stop further execution if access token is missing
        }

        setToken(JSON.parse(accessToken));

        const decodedToken = jwt_decode(accessToken);
        if (decodedToken) {
            setUserId(decodedToken.user_id);
            
        } else {
            setError("Failed to decode access token.");
            return; // Stop further execution if decoding fails
        }

        const intervalId = setInterval(() => {
            getGeolocation();

        }, 300000); // Every 5 minutes

        return () => clearInterval(intervalId);

    }, [])


    const getGeolocation = () =>{

        if (!navigator.geolocation){
            setError("Your broswer does not support geolocation");
        }

        setIsLoading(true);

        navigator.geolocation.getCurrentPosition(
            
            pos => {
              setPosition({
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude,
              });
              setIsLoading(false);
              postGeolocation();
            },
            error => {
              setError(error.message);
              setIsLoading(false);
            }
          );
    }


    const postGeolocation = async () =>{

        const currentTime = new Date();
        const year = currentTime.getFullYear();
        const month = String(currentTime.getMonth() + 1).padStart(2, '0'); 
        const day = String(currentTime.getDate()).padStart(2, '0');
        const hours = String(currentTime.getHours()).padStart(2, '0');
        const minutes = String(currentTime.getMinutes()).padStart(2, '0');
        const seconds = String(currentTime.getSeconds()).padStart(2, '0');
        const dateTimeString = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;

        const newLocation = {

            "latitude": position.latitude,
            "longitude": position.longitude,
            "timestamp": dateTimeString,
            "merchandiser_id": userId
        }

        if (!isLoading && !error && position !== null){

            try {

                const response = await fetch(LOCATION_URL, {
                    method: "POST",
                    headers:{
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newLocation)
                })

                const data = await response.json();

                if (data.status_code === 201){
                    console.log(data.message);
                    setSuccess(data.message)

                }else if (data.status_code === 400){
                    setError(data.message)

                }else if (data.status_code === 500){
                    setError("Server error, try again");

                }else{
                    setError("System experiencing some problem, try again later.")
                }
                    
            } catch (error) {
                console.log(error);
                setError("Failed to post location.")
            }
        }
    }

    return {isLoading, error, success}
}

export default Location


