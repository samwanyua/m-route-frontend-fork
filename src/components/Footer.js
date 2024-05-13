import React from "react";
import { FaTwitter, FaFacebookSquare, FaDribbble, FaLinkedin, FaPinterest, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black pt-8 pb-6 mt-auto border-t border-gray-100 z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-center lg:text-left">
          <div className="w-full lg:w-6/12 px-4 mb-8 lg:mb-0">
            <h4 className="text-3xl font-semibold text-white mb-2">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-white">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 flex justify-center lg:justify-start">
              <button className="text-white text-xl font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FaFacebookSquare />
              </button>
              <button className="text-white text-xl font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FaPinterest />
              </button>
              <button className="text-white text-xl font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FaLinkedin />
              </button>
              <button className="text-white text-xl font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FaInstagram />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6 justify-center lg:justify-end">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-white text-lg font-semibold mb-2">Useful Links</span>
                <ul className="list-unstyled">
                  <li className="mb-2 md:mb-4">
                    <a className="text-white hover:text-white font-normal block text-md" href="#">About Us</a>
                  </li>
                  <li className="mb-2 md:mb-4">
                    <a className="text-white hover:text-white font-normal block text-md" href="#">Careers</a>
                  </li>
                  <li className="mb-2 md:mb-4">
                    <a className="text-white hover:text-white font-normal block text-md" href="#">Data visualization</a>
                  </li>
                  <li className="mb-2 md:mb-4">
                    <a className="text-white hover:text-white font-normal block text-md" href="#">Compliance</a>
                  </li>
                </ul>
              </div>
    
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-white text-lg font-semibold mb-2">Other Resources</span>
                <ul className="list-unstyled">
                  <li className="mb-2 md:mb-4">
                    <a className="text-white hover:text-white font-normal block text-md" href="#">Geolocation Services</a>
                  </li>
                  <li className="mb-2 md:mb-4">
                    <a className="text-white hover:text-white font-normal block text-md" href="#">Terms &amp; Conditions</a>
                  </li>
                  <li className="mb-2 md:mb-4">
                    <a className="text-white hover:text-white font-normal block text-md" href="#">Privacy Policy</a>
                  </li>
                  <li className="mb-2 md:mb-4">
                    <a className="text-white hover:text-white font-normal block text-md" href="#">Contact Us</a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-blueGray-300" />
      <div className="flex flex-wrap items-center justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-white font-semibold py-1">
            Copyright © <span id="get-current-year space-x-2">2024</span><a href="#" className="text-blue-600 hover:text-gray-800" target="_blank" rel="noopener noreferrer ml-2">Merch Mate Group</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
