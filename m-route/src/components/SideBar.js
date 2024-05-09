import React from "react";
import { Link } from "react-router-dom";
import { RiHome2Line, RiMapPinLine, RiSettings2Line } from "react-icons/ri";

const SidebarItem = ({ icon, label, to }) => {
  return (
    <Link to={to} className="flex items-center gap-4">
      {icon}
      <span className="text-lg font-semibold text-blue-600">{label}</span>
    </Link>
  );
};

const SideBar = () => {
  const sidebarItems = [
    { icon: <RiHome2Line className="h-6 w-6 text-blue-600" />, label: "Home", to: "/" },
    { icon: <RiMapPinLine className="h-6 w-6 text-blue-600" />, label: "Routes plan", to: "/routes" },
    { icon: <RiSettings2Line className="h-6 w-6 text-blue-600" />, label: "Settings", to: "/settings" },
  ];

  return (
    <div className="grid grid-rows-[auto,1fr] h-screen w-64 mr-12 p-8 border-r border-gray-100 z-0">
      <div className="flex flex-col gap-8">
        {sidebarItems.map((item, index) => (
          <SidebarItem key={index} {...item} />
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default SideBar;
