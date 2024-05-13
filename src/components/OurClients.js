import React from 'react';
// import { FaFacebook, FaGoogle, FaTwitter, FaAmazon, FaApple, FaMicrosoft, FaNetflix, FaInstagram, FaLinkedin, FaPinterest, FaSnapchat, FaSpotify } from 'react-icons/fa';
import { FaAlipay } from "react-icons/fa";
import { FaAirbnb } from "react-icons/fa";
import { FaAsymmetrik } from "react-icons/fa";
import { FaAutoprefixer } from "react-icons/fa";
import { FaBabyCarriage } from "react-icons/fa";
import { FaBacon } from "react-icons/fa";
import { FaBlender } from "react-icons/fa";
import { FaBloggerB } from "react-icons/fa";
import { FaBoxTissue } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa";
import { FaCcDinersClub } from "react-icons/fa";
import { FaChessQueen } from "react-icons/fa";



const OurClients = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col ">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Clients</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md">
          <FaAlipay className="text-blue-600 h-12 w-12" />
        </div>
        <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md">
          <FaAirbnb className="text-red-600 h-12 w-12" />
        </div>
        <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md">
          <FaAsymmetrik className="text-blue-400 h-12 w-12" />
        </div>
        <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md">
          <FaAutoprefixer className="text-yellow-600 h-12 w-12" />
        </div>
        <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md">
          <FaBabyCarriage className="text-gray-800 h-12 w-12" />
        </div>
        <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md">
          <FaBacon className="text-blue-900 h-12 w-12" />
        </div>
        <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md">
          <FaBlender className="text-red-600 h-12 w-12" />
        </div>
        <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md">
          <FaBloggerB className="text-pink-600 h-12 w-12" />
        </div>
        <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md">
          <FaCcDinersClub className="text-blue-600 h-12 w-12" />
        </div>
        <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md">
          <FaBullseye className="text-red-600 h-12 w-12" />
        </div>
        <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md">
          <FaChessQueen className="text-yellow-400 h-12 w-12" />
        </div>
        <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md">
          <FaBoxTissue className="text-green-500 h-12 w-12" />
        </div>
      </div>
    </div>
  );
};

export default OurClients;
