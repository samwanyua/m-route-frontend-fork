// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';

const Home = ({ authorized }) => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 bg-cover bg-center" style={{ backgroundImage: 'url(https://docs.qgis.org/3.34/en/_images/decoration_layoutextents_example.png)', backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>      
      <div className="max-w-4xl px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl md:text-xl lg:text-2xl font-bold text-black mb-4 text-center">Welcome to our Sales Tracking System</h1>
        <p className="text-lg font-medium md:text-lg lg:text-xl text-black mb-8 text-center">Track your merchandisers' movements seamlessly.</p>
        {!authorized && (
          <div className="flex justify-center">
            <Link to="/login">
            <button className="bg-white text-black py-2 px-3 md:py-2 md:px-4 lg:py-3 lg:px-6 rounded-full outline hover:shadow-md hover:bg-blue-600 hover:text-white transition-all">
              Get started
            </button>

            </Link>
          </div>
        )}
      </div>
      <div className=" mt-8">
        <ContactUs /> 
        <AboutUs /> 
      </div>
    </div>
  );
};

export default Home;