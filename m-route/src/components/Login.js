import { TextField } from "@mui/material";

const Login = () => {
  return (
    <form className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-8 gap-4">
      <button className="flex items-center gap-2">
        <div className="close">
          <img className="h-6 w-6" alt="" src="/close.svg" />
        </div>
        <b className="text-blue-600 text-lg">Log In</b>
      </button>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-1">
            <div className="text-sm text-gray-700">Email</div>
            <input
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="mymail@gmail.com"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-1">
            <div className="text-sm text-gray-700">Password</div>
            <TextField className="input7" color="primary" type="text" />
          </div>
          <div className="text-sm text-blue-600">Forgot password?</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 border border-gray-300 flex items-center justify-center rounded-md">
            {/* Insert your checkbox icon here */}
          </div>
          <div className="text-sm text-gray-700">Remember me</div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 w-full">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full uppercase text-sm hover:bg-blue-700 transition duration-300">
          Log In
        </button>
        <div className="flex items-center gap-1">
          <div className="text-sm text-gray-700">Don’t have an account?</div>
          <b className="text-blue-600 text-lg">Sign Up</b>
        </div>
      </div>
    </form>
  );
};

export default Login;
