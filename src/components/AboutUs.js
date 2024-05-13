import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white rounded-md shadow-md p-6 mb-8">
      <div className="mb-6">
        <div className="bg-white rounded-md p-4">
          <h2 className="text-2xl font-bold mb-2">About Merch Mate</h2>
          <p className="text-gray-700">
            Merch Mate is a leading provider of innovative solutions for tracking salespeople and optimizing route plans.
            Our mission is to revolutionize the way companies monitor their field operations, ensuring efficiency and transparency.
          </p>
        </div>
      </div>
      <div className="mb-6">
        <div className="bg-white rounded-md p-4">
          <h3 className="text-lg font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-700">
            To empower businesses with cutting-edge technology, enabling them to achieve maximum productivity and growth.
          </p>
        </div>
      </div>
      <div className="mb-6">
        <div className="bg-white rounded-md p-4">
          <h3 className="text-lg font-semibold mb-2">Mission Statement</h3>
          <p className="text-gray-700">
            At Merch Mate, we are committed to providing exceptional solutions that streamline field operations,
            enhance visibility, and drive business success.
          </p>
        </div>
      </div>
      <div>
        <div className="bg-white rounded-md p-4">
          <h3 className="text-lg font-semibold mb-2">Core Values</h3>
          <ul className="list-disc pl-5 text-gray-700 mb-0">
            <li>Customer Centricity: We prioritize the needs and satisfaction of our customers above all else.</li>
            <li>Innovation: We continuously strive to innovate and improve our products to stay ahead of the curve.</li>
            <li>Integrity: We conduct our business with honesty, transparency, and ethical behavior.</li>
            <li>Collaboration: We believe in the power of teamwork and collaboration to achieve common goals.</li>
            <li>Excellence: We pursue excellence in everything we do, aiming for the highest standards of quality and performance.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
