import React from "react";
import { Link } from "react-router-dom";
import { RiHome2Line, RiMapPinLine, RiSettings2Line } from "react-icons/ri";

const SideBar = () => {
  return (
    <div className="flex flex-col gap-8 mr-12 mt-8" p-8>
      <div className="flex items-center gap-4">
        <RiHome2Line className="h-6 w-6 text-blue-600 ml-4" />
        <Link to="/" className="text-lg font-semibold text-blue-600">Home</Link>
      </div>
      <div className="flex items-center gap-4">
        <RiMapPinLine className="h-6 w-6 text-blue-600 ml-4" />
        <div className="text-lg font-semibold text-blue-600">Routes plan</div>
      </div>
      <button className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg gap-4 ml-4">
        <RiSettings2Line className="h-6 w-6" />
        <div className="text-lg font-semibold">Settings</div>
      </button>
    </div>
  );
};

export default SideBar;
