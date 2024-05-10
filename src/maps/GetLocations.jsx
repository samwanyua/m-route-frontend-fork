import { useState, useEffect } from "react";

const LOCATIONS_URL = "https://m-route-backend.onrender.com/users/locations";
const USERS_URL = "https://m-route-backend.onrender.com/user/users";




const GetLocations = () =>{

    const [locations, setLocations] = useState([]);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const [token, setToken] = useState("");


    useEffect(() =>{

        const accessToken = localStorage.getItem("access_token");
        
        if (!accessToken) {
            setError("Access token is missing. Please log in.");
            return; // Stop further execution if access token is missing
        }

        setToken(JSON.parse(accessToken));


        const intervalId = setInterval(() => {
            fetchLatestLocations();
            fetchUsersData();

        }, 200000); 

        return () => clearInterval(intervalId);

    }, [])

    const fetchLatestLocations = async () =>{


        const response = await fetch(LOCATIONS_URL, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();


        if (data.status_code === 200){
            setLocations(data.message);

        }else if (data.status_code === 400 || data.status_code === 404){
            setError(data.message);

        }else if (data.status_code === 500){
            console.log(data.message)
            setError("Server error, try again");

        }else{
            console.log(data)
            setError("System experiencing a problem, please try again later.");
        }
    }


    const fetchUsersData = async () =>{

        const response = await fetch(USERS_URL, {
            method: "GET",
            headers:{
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })

        const data = await response.json();

        if (data.status_code === 200){
            const merchandisers = data.message.filter(user => (user.role === "merchandiser") && (user.status === "active"));
            setUsers(merchandisers);
            
        }else if (data.status_code === 404){
            setError(data.message || "Failed to fetch users.");

        }else{
            setError("Failed to fetch users.")
        }

        

    }

    return {error, users, locations};


}

export default GetLocations;




