import React from "react";
import { FaTwitter, FaFacebookSquare, FaDribbble, FaLinkedin, FaPinterest, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-auto border-t border-gray-100 z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-black mb-2">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              {/* <button className="text-lightBlue-400 text-xl font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FaTwitter />
              </button> */}
              <button className="text-lightBlue-600 text-xl font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FaFacebookSquare />
              </button>
              <button className="text-black text-xl font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FaPinterest />
              </button>
              <button className="text-blueGray-800 text-xl font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FaLinkedin />
              </button>
              <button className="text-blueGray-800 text-xl font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FaInstagram />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-black hover:text-blueGray-800 font-normal block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
                  </li>
                  <li>
                    <a className="text-black hover:text-blueGray-800 font-normal block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Careers</a>
                  </li>
                  <li>
                    <a className="text-black hover:text-blueGray-800 font-normal block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Data visualization</a>
                  </li>
                  <li>
                    <a className="text-black hover:text-blueGray-800 font-normal block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Compliance</a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-black hover:text-blueGray-800 font-normal block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">Geolocation Services</a>
                  </li>
                  <li>
                    <a className="text-black hover:text-blueGray-800 font-normal block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a className="text-black hover:text-blueGray-800 font-normal block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
                  </li>
                  <li>
                    <a className="text-black hover:text-blueGray-800 font-normal block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-blueGray-300" />
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-blueGray-500 font-semibold py-1 space-x-2">
            Copyright © <span id="get-current-year space-x-2">2021</span><a href="#" className="text-blue-600 hover:text-gray-800" target="_blank ml-2">Merchandise Group</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
