import React from "react";
import { Link } from "react-router-dom";
import { RiNotification2Line } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-4">
        <Link to="/home" className="text-lg font-bold text-blue-600">Merch Mate</Link>
      </div>
      <div className="flex items-center gap-8">
        <RiNotification2Line className="h-6 w-6 text-blue-600" />
        <Link to="/login">
          <MdAccountCircle className="h-8 w-8 text-blue-600" />
        </Link>
      <div className="flex flex-col">
        <b className="text-base text-blue-600">Moses</b>
        <div className="text-xs text-black">Manager</div>
      </div>
</div>
    </header>
  );
};

export default Navbar;
