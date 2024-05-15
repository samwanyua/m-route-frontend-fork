import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineLock } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";


const LOGIN_URL = 'https://m-route-backend.onrender.com/users/login';
const CHANGE_PASSWORD_URL = "https://m-route-backend.onrender.com/users/change-password"

const Login = ({ setAuthorized, setRoleCheck }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordExpire, setPasswordExpired] = useState(false);
  const [error, setError] = useState("");
  const [passwordChange, setPasswordChange] = useState({

    email: "",
    oldPassword: "",
    newPassword: ""

  })

  const navigate = useNavigate();

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePassword = event => {
    setPassword(event.target.value);
  };

  const handleChangePassword = event =>{
    const {name, value} = event.target;
    setPasswordChange(prev =>({
      ...prev,
      [name]: value,
    }))
  }

  const changePassword = async event =>{
    event.preventDefault();

    const newPasswordData = {
      "email": passwordChange.email,
      "old_password": passwordChange.oldPassword,
      "new_password": passwordChange.newPassword
    }

    try {

      const response = await fetch(CHANGE_PASSWORD_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newPasswordData)
      })

      const data = await response.json();

      if (data.status_code === 201){
        setError(data.message);
        setPasswordChange({
          email: "",
          oldPassword: "",
          newPassword: ""
        })
        setTimeout(() =>{
          setError("");
          setPasswordExpired(false);
          navigate('/login')
        }, 2000)

      }else if (data.status_code === 400 || data.status_code === 401 || data.status_code === 404){
        setTimeout(() =>{
          setError("");
        }, 2000)
        setError(data.message);

      }else if (data.status_code === 500){
        console.log(data.message)
        setError("There was an error changing your password, try again later.")
        setTimeout(() =>{
          setError("");
        }, 2000)
      }
      
    } catch (error) {
      console.log("Error", error)
      setError("There was an error changing your password.")
      setTimeout(() =>{
        setError("");
      }, 2000)
      
    }
  }

  const handleLogin = async event => {
    event.preventDefault();
    setError("");
  
    try {
      const requestBody = {
        email,
        password
      };

      const response = await fetch(LOGIN_URL, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
      });

      const data = await response.json();

      if (data.status_code === 201){

        const accessToken = data.access_token
        
        localStorage.setItem("access_token", accessToken);
        console.log(accessToken);
        
        setPassword("");
        setEmail("");

        if (data.message.role === "manager"){
          setRoleCheck(true);
          setAuthorized(true);
        }
        const userData = {
          "id": data.message.user_id,
          "role": data.message.role,
          "username": data.message.username,
          "email": data.message.email,
          "last_name": data.message.last_name,
          "avatar": data.message.avatar,
          "last_login": data.message.last_login
        }
        
        console.log(userData);
        localStorage.setItem("user_data", JSON.stringify(userData));
        navigate('/');

      }else if (data.status_code === 400 || data.status_code === 409 || data.status_code === 401){
        setError(data.message)
        setTimeout(() =>{
          setError("");
        }, 2000)

      }else if (data.status_code === 403){
        setError(data.message);
        setPasswordExpired(true);
        setPassword("");
        setEmail("");
        setTimeout(() =>{
          setError("");
        }, 2000)

      }else if (data.status_code === 404){
        setError(data.message);

        setTimeout(() =>{
          navigate('/signup')
        }, 2000)
        setTimeout(() =>{
          setError("");
        }, 2000)

      }else {
        console.log(data.message)
        setError("There was an error logging, try again later")
        setTimeout(() =>{
          setError("");
        }, 2000)

      }
  
    } catch (error) {
      console.error('An error occurred while logging in:', error);
      setError("There was an error logging in, try again later");
      setTimeout(() =>{
        setError("");
      }, 2000)
    }
  };
  

  return (
    <div>
      {!passwordExpire ? (
        <form className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-8 gap-4">
        <button className="flex items-center gap-2">
          <div className="close">
            <Link to="/">
              <AiOutlineClose className="h-6 w-6" />
            </Link>
          </div>
          <b className="text-blue-600 text-lg">Log In</b>
        </button>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-1">
            <div className="text-sm text-gray-700">Email</div>
            <div className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500">
              <FiMail className="h-5 w-5" />
              <input
                className="pl-2 focus:outline-none"
                placeholder="mymail@gmail.com"
                type="text"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-sm text-gray-700">Password</div>
            <div className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500">
              <AiOutlineLock className="h-5 w-5" />
              <input
                className="pl-2 focus:outline-none"
                placeholder="Password"
                type="password"
                value={password}
                onChange={handlePassword}
              />
            </div>
            <div className="text-sm text-blue-600">Forgot password?</div>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-5 h-5 border border-gray-300 flex items-center justify-center rounded-md cursor-pointer"
              onClick={handleRememberMeChange}
            >
              {rememberMe ? (
                <MdCheckBox className="h-4 w-4" />
              ) : (
                <MdCheckBoxOutlineBlank className="h-4 w-4" />
              )}
            </div>
            <div className="text-sm text-gray-700">Remember me</div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 w-full">
          <p>{error}</p>
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-full uppercase text-sm hover:bg-blue-700 transition duration-300"
            onClick={handleLogin}
          >
            Log In
          </button>
          <div className="flex items-center gap-1">
            <div className="text-sm text-gray-700">Don’t have an account?</div>
            <b className="text-blue-600 text-lg">Sign Up</b>
          </div>
        </div>
      </form>
      ):(
        <form onSubmit={changePassword}>
          <label>Email</label>
          <input 
            className=""
            placeholder="myemail@example.com"
            name="email"
            type="email"
            value={passwordChange.email}
            onChange={handleChangePassword}
          />
          <label>Old Password</label>
          <input 
            className=""
            placeholder="Old Password"
            name="oldPassword"
            type="password"
            value={passwordChange.oldPassword}
            onChange={handleChangePassword}
          />
          <label>New Password</label>
          <input 
            className=""
            placeholder="New Password"
            name="newPassword"
            type="password"
            value={passwordChange.newPassword}
            onChange={handleChangePassword}
          />
          <p>{error}</p>
          <button type="submit" >Submit</button>
        </form>
      )}
    </div>
  );
};

export default Login;




