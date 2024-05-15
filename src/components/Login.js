import { useState } from "react";
import { AiOutlineClose, AiOutlineLock } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setAuthorized }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    // console.log("Attempting to login with email:", email, "and password:", password);
  
    try {
      const requestBody = {
        email,
        password
      };
        const headers = {
        'Content-Type': 'application/json'
      };

      const response = await fetch('https://m-route-backend.onrender.com/users/login', {
        method: 'POST',
        headers,
        body: JSON.stringify(requestBody)
      });
  
      if (response.ok) {
        setAuthorized(true);
        navigate('/');
      } else {
        const errorMessage = await response.text();
        console.error('Login failed:', errorMessage);
      }
    } catch (error) {
      console.error('An error occurred while logging in:', error);
    }
  };
  

  return (
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
              onChange={handlePasswordChange}
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
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-full uppercase text-sm hover:bg-blue-700 transition duration-300"
          onClick={handleLogin}
        >
          Log In
        </button>
        <div className="flex items-center gap-1">
          <div className="text-sm text-gray-700">Don’t have an account?</div>
          <Link to="/signup">
          <b className="text-blue-600 text-lg">Sign Up</b>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Login;
