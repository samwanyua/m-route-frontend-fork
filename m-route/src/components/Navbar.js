import React from "react";
import { Link } from "react-router-dom";
import { RiNotification2Line } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-4">
        <Link to="/" className="text-lg font-bold">Merchandiser</Link>
      </div>
      <div className="flex items-center gap-8">
        <RiNotification2Line className="h-5 w-5 text-gray-600" />
        <MdAccountCircle className="h-6 w-6 text-gray-600" />
        <div className="flex flex-col">
          <b className="text-base">Moses</b>
          <div className="text-xs text-blue-500">Manager</div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
