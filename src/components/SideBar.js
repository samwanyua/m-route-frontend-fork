import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiHome2Line, RiMapPinLine, RiSettings2Line } from "react-icons/ri";
import { FaRegMessage } from "react-icons/fa6";
import { MdOutlineReviews } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";

const SidebarItem = ({ icon, label, to }) => {
  return (
    <Link to={to} className="flex items-center gap-4">
      {icon}
      <span className="text-lg font-semibold text-blue-600">{label}</span>
    </Link>
  );
};

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarItems = [
    { icon: <RiHome2Line className="h-6 w-6 text-blue-600" />, label: "Home", to: "/" },
    { icon: <RiMapPinLine className="h-6 w-6 text-blue-600" />, label: "Routes", to: "/routes" },
    { icon: <FaRegCalendarAlt className="h-6 w-6 text-blue-600" />, label: "Calendar", to: "/calendar" },
    { icon: <RiSettings2Line className="h-6 w-6 text-blue-600" />, label: "Settings", to: "/settings" },
    { icon: <MdOutlineReviews className="h-6 w-6 text-blue-600" />, label: "Reviews", to: "/reviews" },
    { icon: <FaInfoCircle className="h-6 w-6 text-blue-600" />, label: "About us", to: "/about" },
    { icon: <FaRegMessage className="h-6 w-6 text-blue-600" />, label: "Contact Us", to: "/contacts" },
  ];

  return (
    <div className={`grid grid-rows-[auto,1fr] h-screen w-${isOpen ? '64' : '12'} mr-12 p-8 border-r border-gray-100 z-0`}>
      <div className="flex items-center mb-8">
        <IoMenu className="h-8 w-8 cursor-pointer text-blue-600" onClick={toggleSidebar} />
        {isOpen && <span className="ml-4 text-blue-600 text-lg font-bold">Menu</span>}
      </div>
      <div className={`flex flex-col gap-8 ${isOpen ? '' : 'hidden'}`}>
        {sidebarItems.map((item, index) => (
          <SidebarItem key={index} {...item} />
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default SideBar;
